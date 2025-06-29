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
          :form="form"
          :form-blured="formBLured"
          @back="
            $router.push({
              query: { step: FormStepEnum.FINAL_EVENT_CREATE },
            })
          "
          @next="handleSetBasicInfo"
        />
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
          @next="handleSetTicketsAndPricing"
        />
        <EventsCreateStepsFinalEventCreate
          v-if="
            $route.query.step === FormStepEnum.FINAL_EVENT_CREATE &&
            $route.query.step
          "
          @on-cancel="handleCancel"
          @on-publish="handlePublish"
          @on-save-draft="handleSaveDraft"
          :event="finalEventForm"
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
import {
  AudienceType,
  EventType,
  LocationType,
  type Event,
  type EventForm,
  type Event as EventModel,
} from "~/types/events";
import type { TicketType, TicketTypeForm } from "~/types/ticket-type";

const finalEventForm = ref<Omit<
  EventModel,
  "id" | "created_at" | "updated_at"
> | null>(null);
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
}) => {
  eventFormBuilder
    .setEventType(event.event_type)
    .setLocation(event.location)
    .setLocationType(event.location_type);

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

const createEvent = async (event: EventForm) => {
  await execute("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
    onSuccess: (res: ResponseSchemaType<Event>) => {
      toast.success("Event created successfully , redirecting to events");
      console.log("created event res: ", res);
      console.log("created event data: ", data.value);

      eventCreatedId.value = res?.data?.id;
      eventFormBuilder.resetFormAndFormBlurred();
    },
    onError: () => {
      if (import.meta.dev) {
        console.error("Error creating event:", error);
      }
      throw new Error(
        "something went wrong while creating event , please try again"
      );
    },
  });
};

const createTickets = async (tickets: TicketTypeForm[]) => {
  try {
    await execute("/api/ticket-types", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tickets),
      onSuccess: (res: ResponseSchemaType<TicketType[]>) => {
        toast.success("Tickets created successfully , redirecting to events");
      },
      onError: () => {
        throw new Error(
          "something went wrong while creating tickets , please try again"
        );
      },
    });
  } catch (error) {
    if (import.meta.dev) {
      console.error("Error creating tickets:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "something went wrong while creating tickets , please try again"
      );
    }
  }
};

const handlePublish = async () => {
  try {
    const { formData, data: event } = eventFormBuilder.buildForm();
    finalEventForm.value = event;

    console.log("first event form", formData);
    console.log("final event form", event);

    await createEvent(event);
    if (!eventCreatedId.value) {
      throw new Error("Event not created , please try again");
    }

    const newTickets = ticketsList.value.map((ticket) => ({
      ...ticket,
      event_id: eventCreatedId.value as number,
    }));
    await createTickets(newTickets);
    console.log("new tickets", newTickets);

    timeoutRefs.push(
      setTimeout(() => {
        navigateTo("/dashboard/events");
      }, 1000)
    );
  } catch (error) {
    console.error("Error building event form:", error);
    toast.error(
      error instanceof Error
        ? error.message
        : "Please fill out all required fields before proceeding."
    );
  }
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

useSeoMeta({
  title: "Create Event",
  description: "Create a new event",
});
definePageMeta({
  pageTransition: { name: "page", mode: "default" },
  layout: "dashboard",
});
</script>
