import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchema } from "~/server/utils/response-schema";
import type { TokenPayload } from "~/types/tokens";

// المسارات العامة التي لا تحتاج إلى مصادقة
const publicRoutes = ["/", "/register", "/login"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    // إذا كان المسار عاماً، نسمح بالوصول مباشرة
    if (publicRoutes.includes(to.path)) {
      return;
    }

    // get the token from the cookie ( that is secure and httpOnly and sameSite: strict )
    const cookies = useRequestHeader("cookie");
    const token = cookies
      ?.split(";")
      .find((cookie) => cookie.includes("token"))
      ?.split("=");
    console.log("auth middleware token: ", token?.[1]);
    // إذا لم يكن هناك توكن، نعيد التوجيه إلى صفحة تسجيل الدخول
    // if (!token?.[1]) {
    //   return navigateTo("/");
    // }
    const { data: verifiedToken, status } = await useFetch<
      ResponseSchema<TokenPayload>
    >("/api/auth/verify-token", { key: QUERY_KEYS.VERIFIED_TOKEN });
    if (status.value === "error" || !verifiedToken.value?.data) {
      return navigateTo("/");
    }
    if (verifiedToken.value?.data && publicRoutes.includes(to.path)) {
      return navigateTo("/dashboard");
    }
  } catch (error) {
    console.error("Error !!, Auth middleware: ", error);
    return navigateTo("/");
  }
});
