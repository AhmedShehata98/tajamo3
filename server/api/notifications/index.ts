import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";
import notifications from "~/server/utils/notifications";
import { Notifications as NotificationsForm } from "~/types/notifications";

export default defineEventHandler(async (event) => {
  const jwtSecretKey = useRuntimeConfig().jwtSecret;

  try {
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

    if (event.method === "GET") {
      const notificationsList = await notifications.getNotifications(user.id);

      if (!notificationsList) {
        return createError({
          statusCode: 404,
          statusMessage: "No notifications found",
        });
      }

      return new ResponseSchema(
        notificationsList,
        true,
        "Notifications fetched successfully"
      );
    }

    if (event.method === "DELETE") {
      const body = await readBody<{ ids: string[] }>(event);

      const deletedNotifications = notifications.deleteNotifications(body.ids);

      return new ResponseSchema(
        deletedNotifications,
        true,
        "Notification created successfully"
      );
    }

    if (event.method === "PATCH") {
      const body = await readBody<{ notification: NotificationsForm }>(event);

      const { id, ...rest } = body?.notification;

      const updatedNotification = await notifications.updateNotification(
        id,
        rest
      );

      if (!updatedNotification) {
        return createError({
          statusCode: 404,
          statusMessage: "Notification not found",
        });
      }

      return new ResponseSchema(
        updatedNotification,
        true,
        "Notification updated successfully"
      );
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});
