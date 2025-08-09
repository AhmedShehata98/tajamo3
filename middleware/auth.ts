import { getUserState, setUserState } from "~/stores/user";
import type { ResponseSchemaType } from "~/types/backend-response";
import type { User } from "~/types/users";

const publicRoutes = ["/", "/register", "/login"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  const controller = new AbortController();
  const clientCookies = useCookie("token");
  const userData = getUserState();

  if (userData && Object.keys(userData).length) {
    return;
  }

  if (publicRoutes.includes(to.path)) {
    return;
  }

  if (!clientCookies.value) {
    return abortNavigation();
  }

  try {
    const { data, execute } = await useFetch<ResponseSchemaType<User>>(
      "/api/users/me",
      {
        method: "GET",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientCookies.value}`,
        },
        lazy: true,
        immediate: false,
      }
    );
    if (!publicRoutes.includes(to.path) || !userData) {
      await execute();
    }

    if (data.value) {
      setUserState(data.value.data);
      controller.abort();
    }
  } catch (error) {
    console.error("Error !!, Auth middleware: ", error);
    controller.abort();
  }
});
