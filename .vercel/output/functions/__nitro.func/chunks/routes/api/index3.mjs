import { d as defineEventHandler, a as useRuntimeConfig, j as getCookie, n as notifications, c as createError, R as ResponseSchema, r as readBody } from '../../_/nitro.mjs';
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

const index = defineEventHandler(async (event) => {
  const jwtSecretKey = useRuntimeConfig().jwtSecret;
  try {
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
    if (event.method === "GET") {
      const notificationsList = await notifications.getNotifications(user.id);
      if (!notificationsList) {
        return createError({
          statusCode: 404,
          statusMessage: "No notifications found"
        });
      }
      return new ResponseSchema(
        notificationsList,
        true,
        "Notifications fetched successfully"
      );
    }
    if (event.method === "DELETE") {
      const body = await readBody(event);
      const deletedNotifications = notifications.deleteNotifications(body.ids);
      return new ResponseSchema(
        deletedNotifications,
        true,
        "Notification created successfully"
      );
    }
    if (event.method === "PATCH") {
      const body = await readBody(event);
      const { id, ...rest } = body == null ? void 0 : body.notification;
      const updatedNotification = await notifications.updateNotification(
        id,
        rest
      );
      if (!updatedNotification) {
        return createError({
          statusCode: 404,
          statusMessage: "Notification not found"
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
      statusMessage: error instanceof Error ? error.message : "Internal Server Error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index3.mjs.map
