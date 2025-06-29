import { ref, computed, onMounted, onUnmounted } from "vue";

export function useCountdown(initialMilliseconds: number) {
  const millisecondsLeft = ref(initialMilliseconds);
  const isRunning = ref(false);
  let interval: ReturnType<typeof setInterval> | null = null;

  const start = () => {
    if (isRunning.value || millisecondsLeft.value <= 0) return;
    isRunning.value = true;

    interval = setInterval(() => {
      if (millisecondsLeft.value > 0) {
        millisecondsLeft.value -= 1000;
        if (millisecondsLeft.value < 0) millisecondsLeft.value = 0;
      } else {
        stop();
      }
    }, 1000);
  };

  const stop = () => {
    if (interval) clearInterval(interval);
    isRunning.value = false;
  };

  const reset = (newMilliseconds: number = initialMilliseconds) => {
    stop();
    millisecondsLeft.value = newMilliseconds;
  };

  const totalSeconds = computed(() =>
    Math.floor(millisecondsLeft.value / 1000)
  );
  const minutes = computed(() => Math.floor(totalSeconds.value / 60));
  const seconds = computed(() => totalSeconds.value % 60);
  const formatted = computed(
    () =>
      `${String(minutes.value).padStart(2, "0")}:${String(
        seconds.value
      ).padStart(2, "0")}`
  );

  onUnmounted(() => stop());

  return {
    millisecondsLeft,
    isRunning,
    formatted,
    start,
    stop,
    reset,
  };
}
