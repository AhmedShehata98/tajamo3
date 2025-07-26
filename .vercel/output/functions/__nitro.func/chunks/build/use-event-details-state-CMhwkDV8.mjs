import { a as useState, s as stateKeys } from './use-user-GArBKlyM.mjs';
import { ref } from 'vue';

const useEventDetailsState = () => {
  const eventDetailsState = useState(
    stateKeys.eventDetails,
    () => ref({
      event: null,
      selectedTicketType: null
    })
  );
  const handleSetEventDetails = (event) => {
    eventDetailsState.value.event = event;
  };
  const handleSetSelectedTicketType = (ticketType) => {
    eventDetailsState.value.selectedTicketType = ticketType;
  };
  return {
    eventDetailsState,
    handleSetEventDetails,
    handleSetSelectedTicketType
  };
};

export { useEventDetailsState as u };
//# sourceMappingURL=use-event-details-state-CMhwkDV8.mjs.map
