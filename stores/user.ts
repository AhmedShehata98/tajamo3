import { stateKeys } from "~/constants/state-keys";
import type { User } from "~/types/users";

export function setUserState(user: User | null) {
  const userStore = useState(stateKeys.user, () => ref<User | null>(null));
  userStore.value = user;
}

export function getUserState() {
  const userStore = useState(stateKeys.user, () => ref<User | null>(null));
  return userStore.value;
}

export function useUserStore() {
  return useState(stateKeys.user, () => ref<User | null>(null));
}
