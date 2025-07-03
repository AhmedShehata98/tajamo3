import { ResponseSchema } from "~/server/utils/response-schema";
import supabase, { SupabaseClient } from "~/server/utils/supabase";
import users from "~/server/utils/users";
import { UserForm } from "~/types/users";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      return new ResponseSchema(
        await users.getUsers(),
        true,
        "Users fetched successfully"
      );
    }
    if (event.method === "POST") {
      const body = await readBody<UserForm>(event);
      if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.phone ||
        !body.email ||
        !body.country ||
        !body.city
      ) {
        return createError({
          statusCode: 400,
          statusMessage:
            "Required fields are missing (first_name, last_name, phone, email,country, city)",
        });
      }

      const createdUser = await users.createUser(body);

      console.log("createdUser: ", createdUser);
      if (!createdUser) {
        return createError({
          statusCode: 400,
          statusMessage: createdUser,
        });
      }

      return new ResponseSchema(createdUser, true, "User created successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error?.message : "internal server error",
    });
  }
});
