import supabase from "~/server/utils/supabase";

export default defineEventHandler(async (event) => {
  const { email, phone } = getQuery<{
    email: string;
    phone: string;
  }>(event);

  if (!email && !phone) {
    throw createError({
      statusCode: 400,
      message: "Email or phone number is required",
    });
  }

  if (email) {
    const { data, error } = await supabase

      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (data) {
      return {
        statusCode: 400,
        message: "Email already exists",
        isExists: true,
      };
    } else {
      return {
        statusCode: 400,
        message: "Email is not registered",
        isExists: false,
      };
    }
  }
  if (phone) {
    const { data, error } = await supabase
      .from("users")
      .select("phone")
      .eq("phone", phone)
      .single();

    if (data) {
      return {
        statusCode: 400,
        message: "Phone already exists",
        isExists: true,
      };
    } else {
      return {
        statusCode: 400,
        message: "Phone number is not registered",
        isExists: false,
      };
    }
  }
});
