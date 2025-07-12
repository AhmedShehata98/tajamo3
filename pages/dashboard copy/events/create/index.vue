<template>
  <div class="p-4 w-full flex-col items-start justify-start">
    <span class="w-full flex flex-col items-start justify-center gap-3">
      <h3 class="font-semibold text-2xl text-start text-text-primary">
        Create New Event
      </h3>
      <p class="text-text-secondary">
        Fill out the form below to create a new event.
      </p>
    </span>
    <KeepAlive>
      <div class="w-full flex flex-col items-start justify-start gap-4">
        <EventsCreateStepsBasicInfoForm
          v-if="
            $route.query.step === FormStepEnum.BASIC_INFO || !$route.query.step
          "
          @back="
            $router.push({
              query: { step: FormStepEnum.FINAL_EVENT_CREATE },
            })
          "
          @next="handleSetBasicInfo"
        />
        <ClientOnly>
          <EventsCreateStepsTypeAndLocation
            v-if="
              $route.query.step === FormStepEnum.TYPE_AND_LOCATION &&
              $route.query.step
            "
            @back="
              $router.push({
                query: { step: FormStepEnum.BASIC_INFO },
              })
            "
            @next="handleSetEventTypeAndLocation"
          />
        </ClientOnly>
        <EventsCreateStepsSchedule
          v-if="
            $route.query.step === FormStepEnum.SCHEDULE && $route.query.step
          "
          @back="
            $router.push({
              query: { step: FormStepEnum.TYPE_AND_LOCATION },
            })
          "
          @next="handleSetSchedule"
        />
        <EventsCreateStepsAudienceAndCapacity
          v-if="
            $route.query.step === FormStepEnum.AUDIENCE_AND_CAPACITY &&
            $route.query.step
          "
          @back="
            $router.push({
              query: { step: FormStepEnum.SCHEDULE },
            })
          "
          @next="handleSetAudienceAndCapacity"
        />
        <EventsCreateStepsTicketsAndPricing
          v-if="
            $route.query.step === FormStepEnum.TICKETS_AND_PRICING &&
            $route.query.step
          "
          @back="
            $router.push({
              query: { step: FormStepEnum.AUDIENCE_AND_CAPACITY },
            })
          "
          :event-capacity="eventFormBuilder.form.capacity"
          :event-date="{
            start_at: eventFormBuilder.form.start_at,
            end_at: eventFormBuilder.form.end_at,
          }"
          @next="handleSetTicketsAndPricing"
        />
        <EventsCreateStepsFinalEventCreate
          v-if="
            $route.query.step === FormStepEnum.FINAL_EVENT_CREATE &&
            $route.query.step
          "
          :event="finalEventForm"
          @on-publish="handlePublish"
          @on-save-draft="handleSaveDraft"
          @on-back="
            $router.push({
              query: { step: FormStepEnum.TICKETS_AND_PRICING },
            })
          "
        />
      </div>
    </KeepAlive>
  </div>
</template>
<script setup lang="ts">
enum FormStepEnum {
  BASIC_INFO = "basic-info",
  TYPE_AND_LOCATION = "type-and-location",
  SCHEDULE = "schedule",
  AUDIENCE_AND_CAPACITY = "audience-and-capacity",
  TICKETS_AND_PRICING = "tickets-and-pricing",
  FINAL_EVENT_CREATE = "final-event-create",
}

import {
  EventsCreateStepsAudienceAndCapacity,
  EventsCreateStepsBasicInfoForm,
} from "#components";
import { toast } from "vue-sonner";
import { EventCreateCommand } from "~/services/events/event.command";
import { TicketTypeCreateCommand } from "~/services/ticket-types/ticket-type.command";
import {
  AudienceType,
  EventType,
  LocationType,
  type Event,
  type EventForm,
  type Event as EventModel,
} from "~/types/events";
import type { TicketType, TicketTypeForm } from "~/types/ticket-type";

const finalEventForm = ref<EventForm | null>(null);
const eventFormBuilder = useEventFormBuilder();
const ticketsList = ref<TicketTypeForm[]>([]);
const eventCreatedId = ref<number | undefined>(undefined);

const user = useUser();
const { execute, data, error, pending, success } = useApiMutation();
const timeoutRefs: NodeJS.Timeout[] = [];

const handleSetBasicInfo = (event: {
  name: string;
  image: string;
  description: string;
}) => {
  eventFormBuilder
    .setName(event.name)
    .setImage(event.image)
    .setDescription(event.description);

  navigateTo({
    query: { step: FormStepEnum.TYPE_AND_LOCATION },
  });
};

const handleSetEventTypeAndLocation = (event: {
  event_type: EventType;
  location: string;
  location_type: LocationType;
  location_coordinates: {
    lat: number;
    lng: number;
  };
}) => {
  eventFormBuilder
    .setEventType(event.event_type)
    .setLocation(event.location)
    .setLocationType(event.location_type)
    .setLatitude(event.location_coordinates.lat)
    .setLongitude(event.location_coordinates.lng);

  navigateTo({
    query: { step: FormStepEnum.SCHEDULE },
  });
};

const handleSetSchedule = (event: { start_at: string; end_at: string }) => {
  eventFormBuilder.setStartDate(event.start_at).setEndDate(event.end_at);

  navigateTo({
    query: { step: FormStepEnum.AUDIENCE_AND_CAPACITY },
  });
};

const handleSetAudienceAndCapacity = (event: {
  audience: AudienceType;
  capacity: number;
  price: number;
}) => {
  eventFormBuilder.setAudienceType(event.audience).setCapacity(event.capacity);

  navigateTo({
    query: { step: FormStepEnum.TICKETS_AND_PRICING },
  });
};

// const createEvent = async (event: EventForm) => {
// await execute("/api/events", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(event),
//   onSuccess: (res: ResponseSchemaType<Event>) => {
//     toast.success("Event created successfully , redirecting to events");
//     console.log("created event res: ", res);
//     console.log("created event data: ", data.value);

//     eventCreatedId.value = res?.data?.id;
//     eventFormBuilder.resetFormAndFormBlurred();
//   },
//   onError: () => {
//     if (import.meta.dev) {
//       console.error("Error creating event:", error);
//     }
//     throw new Error(
//       "something went wrong while creating event , please try again"
//     );
//   },
// });
// };

// const createTickets = async (tickets: TicketTypeForm[]) => {
//   try {
//     await execute("/api/ticket-types", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(tickets),
//       onSuccess: (res: ResponseSchemaType<TicketType[]>) => {
//         toast.success("Tickets created successfully , redirecting to events");
//       },
//       onError: () => {
//         throw new Error(
//           "something went wrong while creating tickets , please try again"
//         );
//       },
//     });
//   } catch (error) {
//     if (import.meta.dev) {
//       console.error("Error creating tickets:", error);
//       toast.error(
//         error instanceof Error
//           ? error.message
//           : "something went wrong while creating tickets , please try again"
//       );
//     }
//   }
// };

const handlePublish = async () => {
  let eventCreateCmd: EventCreateCommand | undefined = undefined;
  let ticketTypes: TicketTypeCreateCommand | undefined = undefined;
  try {
    const { data: event } = eventFormBuilder.buildForm();

    eventCreateCmd = new EventCreateCommand(event);
    const eventCreated = await eventCreateCmd.execute();

    ticketTypes = new TicketTypeCreateCommand(
      ticketsList.value.map((ticket) => ({
        ...ticket,
        event_id: eventCreated.id,
      }))
    );
    await ticketTypes.execute();
    toast.success("Event created successfully, redirecting to events");
    eventFormBuilder.resetFormAndFormBlurred();

    timeoutRefs.push(
      setTimeout(() => {
        navigateTo("/dashboard/events");
      }, 1000)
    );
  } catch (error) {
    if (!eventCreateCmd) {
      if (import.meta.dev) {
        console.error("eventCreateCmd is not Initialized, cannot undo.");
      }
      return;
    }
    await eventCreateCmd.undo();
    if (!ticketTypes) {
      if (import.meta.dev) {
        console.error("eventCreateCmd is not Initialized, cannot undo.");
      }
      return;
    }
    await ticketTypes.undo();
    console.error("Error building event form:", error);
    toast.error(
      error instanceof Error
        ? error.message
        : "Please fill out all required fields before proceeding."
    );
    toast.error(
      "Something went wrong while creating the event, please try again."
    );
    return;
  }
  //   await createEvent(event);
  //   if (!eventCreatedId.value) {
  //     throw new Error("Event not created , please try again");
  //   }

  //   const newTickets = ticketsList.value.map((ticket) => ({
  //     ...ticket,
  //     event_id: eventCreatedId.value as number,
  //   }));
  //   await createTickets(newTickets);
  //   console.log("new tickets", newTickets);

  //   timeoutRefs.push(
  //     setTimeout(() => {
  //       navigateTo("/dashboard/events");
  //     }, 1000)
  //   );
  // } catch (error) {
  //   console.error("Error building event form:", error);
  //   toast.error(
  //     error instanceof Error
  //       ? error.message
  //       : "Please fill out all required fields before proceeding."
  //   );
  // }
};

const handleSetTicketsAndPricing = (tickets: TicketTypeForm[]) => {
  ticketsList.value = tickets;
  navigateTo({
    query: { step: FormStepEnum.FINAL_EVENT_CREATE },
  });
};

const handleSaveDraft = () => {
  console.log("save draft event form");
};

const handleCancel = () => {
  eventFormBuilder.resetFormAndFormBlurred();
  ticketsList.value = [];
  navigateTo("/dashboard/events");
};

onUnmounted(() => {
  timeoutRefs?.forEach((timeout) => {
    clearTimeout(timeout);
  });
});

watch(
  () => [eventFormBuilder.form, ticketsList.value],
  ([newForm, newTickets]) => {
    if (Object.keys(newForm).length === 0) {
      return;
    }
    finalEventForm.value = {
      ...newForm,
      tickets: newTickets,
      company_id: null,
    } as EventForm;
  },
  { immediate: true, deep: true }
);

useSeoMeta({
  title: "Create Event",
  description: "Create a new event",
});
definePageMeta({
  pageTransition: { name: "page", mode: "default" },
  layout: "dashboard",
});
</script>
