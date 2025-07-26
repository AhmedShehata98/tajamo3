import { E as EventType } from './events-B_eYa6LR.mjs';

const eventTypeBackgroundFactory = (type) => {
  switch (type) {
    case EventType.EVENT:
      return "bg-event-color-event/50 backdrop-blur-sm text-event-color-event";
    case EventType.WEBINAR:
      return "bg-event-color-webinar/50 backdrop-blur-sm text-event-color-webinar";
    case EventType.WORKSHOP:
      return "bg-event-color-workshop/50 backdrop-blur-sm text-event-color-workshop";
    default:
      return "bg-black/50 backdrop-blur-sm text-white";
  }
};
const dateFormatter = (date) => {
  try {
    if (!date) return "N/A";
    const dateObj = new Date(date);
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
    return formatter.format(dateObj);
  } catch (error) {
    console.error("Error formatting date", error);
    return date;
  }
};

export { dateFormatter as d, eventTypeBackgroundFactory as e };
//# sourceMappingURL=utils-DGl0UyFg.mjs.map
