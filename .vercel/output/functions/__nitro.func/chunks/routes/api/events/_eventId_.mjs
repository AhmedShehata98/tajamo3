import { d as defineEventHandler, g as getRouterParams, a as useRuntimeConfig, e as parseCookies, c as createError, f as events, R as ResponseSchema, r as readBody } from '../../../_/nitro.mjs';
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

const _eventId_ = defineEventHandler(async (h3Event) => {
  var _a;
  try {
    const { eventId } = getRouterParams(h3Event);
    const jwtSecret = (_a = useRuntimeConfig()) == null ? void 0 : _a.jwtSecret;
    const cookies = parseCookies(h3Event);
    const token = cookies.token;
    if (!jwtSecret) {
      return createError({
        statusCode: 500,
        statusMessage: "JWT secret is not set"
      });
    }
    if (!token) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    }
    const decodedToken = jwt.verify(token, jwtSecret);
    if (!decodedToken) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    }
    if (h3Event.method === "GET") {
      const event = await events.getEventDetails({
        eventId: parseInt(eventId),
        userId: decodedToken.id
      });
      if (!event) {
        return createError({
          statusCode: 404,
          statusMessage: "Event not found"
        });
      }
      return new ResponseSchema(event, true, "Event fetched successfully");
    }
    if (h3Event.method === "PUT") {
      const body = await readBody(h3Event);
      const updatedEvent = await events.updateEvent(parseInt(eventId), body);
      if (!updatedEvent) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to update event"
        });
      }
      return new ResponseSchema(
        updatedEvent,
        true,
        "Event updated successfully"
      );
    }
    if (h3Event.method === "DELETE") {
      const deletedEvent = await events.deleteEvent(parseInt(eventId));
      if (!deletedEvent) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to delete event"
        });
      }
      return new ResponseSchema(
        deletedEvent,
        true,
        "Event deleted successfully"
      );
    }
  } catch (error) {
    return createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage: error instanceof Error ? error.message : "Internal Server Error"
    });
  }
});

export { _eventId_ as default };
//# sourceMappingURL=_eventId_.mjs.map
