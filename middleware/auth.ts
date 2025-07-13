import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchema } from "~/server/utils/response-schema";
import type { TokenPayload } from "~/types/tokens";

const publicRoutes = ["/", "/register", "/login"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  const controller = new AbortController();
  try {
    if (publicRoutes.includes(to.path)) {
      return;
    }

    const cookies = useRequestHeader("cookie");
    const token = cookies
      ?.split(";")
      .find((cookie) => cookie.includes("token"))
      ?.split("=");

    const { data: verifiedToken, status } = await useFetch<
      ResponseSchema<TokenPayload>
    >("/api/auth/verify-token", {
      key: QUERY_KEYS.VERIFIED_TOKEN,
      signal: controller.signal,
    });
    if (status.value === "error" || !verifiedToken.value?.data) {
      controller.abort();
      return navigateTo("/");
    }
    if (verifiedToken.value?.data && publicRoutes.includes(to.path)) {
      controller.abort();
      return navigateTo("/dashboard");
    }
  } catch (error) {
    console.error("Error !!, Auth middleware: ", error);
    controller.abort();
    return navigateTo("/");
  }
});
