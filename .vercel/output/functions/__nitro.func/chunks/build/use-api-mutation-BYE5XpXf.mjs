import { ref, shallowRef } from 'vue';

function useApiMutation() {
  const data = ref(null);
  const error = shallowRef(null);
  const pending = shallowRef(false);
  const success = shallowRef(false);
  const execute = async (url, options = { onSuccess: () => {
  }, onError: () => {
  } }) => {
    pending.value = true;
    success.value = false;
    error.value = null;
    data.value = null;
    const { onSuccess, onError, ...rest } = options;
    try {
      const res = await fetch(url, {
        ...rest,
        headers: {
          ...options.headers || {}
        }
      });
      if (!res.ok) {
        onError == null ? void 0 : onError(res.statusText);
        throw new Error(`Error: ${res.status}`);
      } else {
        const resData = await res.json();
        data.value = resData;
        success.value = true;
        onSuccess == null ? void 0 : onSuccess(resData);
      }
    } catch (err) {
      error.value = err;
      onError == null ? void 0 : onError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      pending.value = false;
    }
  };
  return {
    data,
    error,
    pending,
    success,
    execute
  };
}

export { useApiMutation as u };
//# sourceMappingURL=use-api-mutation-BYE5XpXf.mjs.map
