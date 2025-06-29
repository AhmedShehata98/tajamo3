import { events } from "~/server/utils/events";
import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";
import { EventType } from "~/types/events";

export default defineEventHandler(async (h3Event) => {
  try {
    const jwtSecret = useRuntimeConfig().jwtSecret;
    const cookies = parseCookies(h3Event);

    const token = cookies.token;
    if (!token) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    if (!jwtSecret) {
      return createError({
        statusCode: 500,
        statusMessage: "JWT secret is not set",
      });
    }

    const decodedToken = jwt.verify(token, jwtSecret as string) as TokenPayload;
    if (!decodedToken) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
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
        myEvents,
      } = getQuery(h3Event);

      const items = await events.getEvents({
        limit: limit ? parseInt(limit as string) : 10,
        offset: offset ? parseInt(offset as string) : 0,
        order: order as string,
        direction: direction as "desc" | "asc",
        orderBy: orderBy as string,
        search: search as string,
        eventType: eventType as EventType,
        myEvents: myEvents === "1" ? true : false,
        userId: decodedToken.id,
      });
      if (!items) {
        return createError({
          statusCode: 404,
          statusMessage: "Events not found",
        });
      }
      return new ResponseSchemaWithPagination(
        items,
        true,
        "Events fetched successfully",
        {
          total: items.length,
          page: offset ? parseInt(offset as string) : 0,
          limit: limit ? parseInt(limit as string) : 10,
        }
      );
    }
    if (h3Event.method === "POST") {
      const body = await readBody(h3Event);
      const createdEvent = await events.createEvent({
        ...body,
        created_by: decodedToken.id,
      });

      if (!createdEvent) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to create event",
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
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});
