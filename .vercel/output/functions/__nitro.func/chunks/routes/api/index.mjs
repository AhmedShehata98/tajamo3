import { d as defineEventHandler, a as useRuntimeConfig, e as parseCookies, c as createError, h as getQuery, f as events, i as ResponseSchemaWithPagination, r as readBody, R as ResponseSchema } from '../../_/nitro.mjs';
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

const index = defineEventHandler(async (h3Event) => {
  try {
    const jwtSecret = useRuntimeConfig().jwtSecret;
    const cookies = parseCookies(h3Event);
    const token = cookies.token;
    if (!token) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    }
    if (!jwtSecret) {
      return createError({
        statusCode: 500,
        statusMessage: "JWT secret is not set"
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
      const {
        limit,
        offset,
        order,
        direction,
        orderBy,
        search,
        eventType,
        myEvents
      } = getQuery(h3Event);
      const items = await events.getEvents({
        limit: limit ? parseInt(limit) : 10,
        offset: offset ? parseInt(offset) : 0,
        order,
        direction,
        orderBy,
        search,
        eventType,
        myEvents: myEvents === "1" ? true : false,
        userId: decodedToken.id
      });
      if (!items) {
        return createError({
          statusCode: 404,
          statusMessage: "Events not found"
        });
      }
      return new ResponseSchemaWithPagination(
        items,
        true,
        "Events fetched successfully",
        {
          total: items.length,
          page: offset ? parseInt(offset) : 0,
          limit: limit ? parseInt(limit) : 10
        }
      );
    }
    if (h3Event.method === "POST") {
      const body = await readBody(h3Event);
      const createdEvent = await events.createEvent({
        ...body,
        created_by: decodedToken.id
      });
      if (!createdEvent) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to create event"
        });
      }
      return new ResponseSchema(
        createdEvent,
        true,
        "Event created successfully"
      );
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : error.toString()
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
