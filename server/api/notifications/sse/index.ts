const clients: any[] = [];
import jwt from "jsonwebtoken";
import { setResponseHeaders } from "h3"; // Ensure this import exists or adjust as needed
import supabase from "~/server/utils/supabase"; // Adjust path as needed
import { Notifications } from "~/types/notifications";
import { TokenPayload } from "~/types/tokens";

export default defineEventHandler(async (event) => {
  const jwtSecretKey = useRuntimeConfig().jwtSecret;
  setResponseHeaders(event, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const token = getCookie(event, "token");

  // if token is not present, return 401 and end the response
  if (!token) {
    event.node.res.statusCode = 401;
    event.node.res.end("Unauthorized");

    return;
  }

  const user = jwt.verify(token, jwtSecretKey) as TokenPayload;

  if (!user) {
    event.node.res.statusCode = 401;
    event.node.res.end("Unauthorized - Invalid Token or Expired");

    return;
  }

  event.node.res.write("\n");

  const res = event.node.res;
  clients.push(res);

  const channel = supabase
    .channel("public:notifications")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "notifications",
        filter: `user_id=eq.${user.id}`,
      },
      (payload) => {
        const notification = payload.new as Notifications;

        const data = `data: ${JSON.stringify(notification)}\n\n`;
        clients.forEach((client) => {
          if (!client.writableEnded) {
            client.write(data);
          }
        });
      }
    )
    .subscribe();

  event.node.req.on("close", () => {
    const idx = clients.indexOf(res);
    if (idx !== -1) clients.splice(idx, 1);
    supabase.removeChannel(channel);
    res.end();
  });
});
