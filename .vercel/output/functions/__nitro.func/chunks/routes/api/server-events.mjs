import { d as defineEventHandler, a as useRuntimeConfig, k as setResponseHeaders, j as getCookie, l as supabase } from '../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const clients = [];
const serverEvents = defineEventHandler(async (event) => {
  const jwtSecretKey = useRuntimeConfig().jwtSecret;
  setResponseHeaders(event, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });
  const token = getCookie(event, "token");
  if (!token) {
    event.node.res.statusCode = 401;
    event.node.res.end("Unauthorized");
    return;
  }
  const user = jwt.verify(token, jwtSecretKey);
  if (!user) {
    event.node.res.statusCode = 401;
    event.node.res.end("Unauthorized - Invalid Token or Expired");
    return;
  }
  event.node.res.write("\n");
  const res = event.node.res;
  clients.push(res);
  const channel = supabase.channel("public:notifications").on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "notifications",
      filter: `user_id=eq.${user.id}`
    },
    (payload) => {
      const notification = payload.new;
      const data = `data: ${JSON.stringify(notification)}

`;
      clients.forEach((client) => {
        if (!client.writableEnded) {
          client.write(data);
        }
      });
    }
  ).subscribe();
  event.node.req.on("close", () => {
    const idx = clients.indexOf(res);
    if (idx !== -1) clients.splice(idx, 1);
    supabase.removeChannel(channel);
    res.end();
  });
});

export { serverEvents as default };
//# sourceMappingURL=server-events.mjs.map
