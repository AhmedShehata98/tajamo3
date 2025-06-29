// composables/useApiMutation.ts
import { ref, shallowRef } from "vue";

export function useApiMutation<T = any>() {
  const data = ref<T | null>(null);
  const error = shallowRef<any>(null);
  const pending = shallowRef(false);
  const success = shallowRef(false);

  const execute = async (
    url: string,
    options: RequestInit & {
      onSuccess?: (data: T) => void;
      onError?: (errorMessage?: string) => void;
    } = { onSuccess: () => {}, onError: () => {} }
  ) => {
    pending.value = true;
    success.value = false;
    error.value = null;
    data.value = null;

    const { onSuccess, onError, ...rest } = options;

    try {
      const res = await fetch(url, {
        ...rest,
        headers: {
          ...(options.headers || {}),
        },
      });

      if (!res.ok) {
        onError?.(res.statusText);
        throw new Error(`Error: ${res.status}`);
      } else {
        const resData = await res.json();
        data.value = resData;
        success.value = true;
        onSuccess?.(resData);
      }
    } catch (err) {
      error.value = err;
      onError?.(err instanceof Error ? err.message : "An error occurred");
    } finally {
      pending.value = false;
    }
  };

  return {
    data,
    error,
    pending,
    success,
    execute,
  };
}
