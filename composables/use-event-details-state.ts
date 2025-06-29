import { stateKeys } from "~/constants/state-keys";
import type { EventDetails } from "~/types/events";
import type { TicketType } from "~/types/ticket-type";

interface EventDetailsState {
  event: EventDetails | null;
  selectedTicketType: TicketType | null;
}

const useEventDetailsState = () => {
  const eventDetailsState = useState(stateKeys.eventDetails, () =>
    ref<EventDetailsState>({
      event: null,
      selectedTicketType: null,
    })
  );

  const handleSetEventDetails = (event: EventDetails): void => {
    eventDetailsState.value.event = event;
  };

  const handleSetSelectedTicketType = (ticketType: TicketType): void => {
    eventDetailsState.value.selectedTicketType = ticketType;
  };

  return {
    eventDetailsState,
    handleSetEventDetails,
    handleSetSelectedTicketType,
  };
};
export default useEventDetailsState;
