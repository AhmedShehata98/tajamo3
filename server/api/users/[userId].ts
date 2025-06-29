import { UserForm } from "~/types/users";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "userId");

  if (!userId) {
    return createError({
      statusCode: 400,
      statusMessage: "User ID is required",
    });
  }

  try {
    if (event.method === "GET") {
      const user = await users.removeUserById(Number(userId));
      if (!user) {
        return createError({
          statusCode: 404,
          statusMessage: "User not found",
        });
      }
      return new ResponseSchema(user, true, "User fetched successfully");
    }

    if (event.method === "PATCH") {
      const body = await readBody<UserForm>(event);
      if (!body) {
        return createError({
          statusCode: 400,
          statusMessage:
            "Required at lest of fields (first_name, last_name, phone, email, country, city)",
        });
      }

      const updatedUser = await users.updateUser(Number(userId), body);
      if (!updatedUser) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to update user",
        });
      }

      return new ResponseSchema(updatedUser, true, "User updated successfully");
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
