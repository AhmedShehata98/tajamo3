import { stateKeys } from "~/constants/state-keys";
import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { User } from "~/types/users";

const useUser = () => {
  const userStore = useState(stateKeys.user, () => ref<User | null>(null));

  const fullName = computed(() => {
    return `${userStore.value?.first_name} ${userStore.value?.last_name}`;
  });

  const cookies = useCookie("token");

  const logout = async () => {
    try {
      const res = await $fetch("/api/auth/logout", {
        method: "POST",
        onResponse: ({ response }) => {
          if (!response.ok) {
            console.log("failed to logout");
          } else {
            userStore.value = null;
          }
        },
      });
      console.log("user logout res", res);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const { status } = useFetch<ResponseSchemaType<User>>("/api/users/me", {
    key: "user-me",
    onResponse: ({ response }) => {
      if (!response.ok) {
        console.error("failed to get user");
      } else {
        userStore.value = response?._data?.data;
      }
    },
    immediate: userStore.value === null,
    lazy: userStore.value !== null,
  });

  watch(
    cookies,
    (newCookies) => {
      if (!newCookies && status.value !== "success") {
        userStore.value = null;
        navigateTo("/");
      }
    },
    { immediate: true }
  );

  return {
    logout,
    userStore,
    fullName,
  };
};

export default useUser;
