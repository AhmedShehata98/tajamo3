<template>
  <div
    style="--component-height: 15rem"
    class="flex items-center justify-start w-fit max-h-[14rem]"
  >
    <div
      class="relative flex flex-col items-center justify-center w-full max-w-(--component-height) h-(--component-height) p-3 bg-neutral-300 p-7 gap-3 border-e-4 border-zinc-500 border-dashed"
    >
      <img :src="qrcode" alt="ticket-qr-code" class="w-full h-full" />
      <span
        class="absolute -top-5 -right-5 rounded-full size-10 bg-background"
      ></span>
      <span
        class="absolute -bottom-5 -right-5 rounded-full size-10 bg-background"
      ></span>
    </div>
    <div
      class="relative -z-[1] p-6 flex gap-4 flex-1 w-full h-full max-h-(--component-height) bg-neutral-200"
    >
      <div>
        <div class="text-xl font-semibold">
          <span class="w-full flex items-center justify-between">
            <strong class="text-accent text-base text-medium">Ticket No</strong>
            <p class="text-text-secondary text-base font-medium">
              #{{ data.ticketId }}
            </p>
          </span>
          <p class="text-text-primary text-lg font-semibold">
            {{ data.eventName }}
          </p>
        </div>
        <ul
          class="w-full mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 items-center justify-start"
        >
          <li
            v-if="data.eventLocationType === LocationTypeValues.OFFLINE"
            class="w-full flex items-center gap-3"
          >
            <Icon
              name="ic:sharp-location-on"
              class="text-3xl text-accent shrink-0"
            />
            <span class="flex flex-col gap-0 max-w-full truncate">
              <p
                class="inline-block text-sm font-semibold leading-5 max-w-full truncate"
              >
                {{ data.eventLocation }}
              </p>
              <p
                class="text-text-secondary text-sm font-medium capitalize max-w-full truncate overflow-hidden"
              >
                {{ data.eventLocationType }}
                location
              </p>
            </span>
          </li>
          <li
            v-if="data.eventLocationType === LocationTypeValues.ONLINE"
            class="w-full flex items-center gap-3"
          >
            <Icon
              name="ic:sharp-location-on"
              class="text-3xl text-accent shrink-0"
            />
            <span class="flex flex-col gap-0 max-w-full truncate">
              <nuxt-link
                :external="true"
                :href="data.eventLocation"
                class="inline-block text-sm capitalize font-semibold leading-5 underline max-w-full truncate"
              >
                go event link
                <Icon
                  name="ic:round-open-in-new"
                  class="inline-block text-text-secondary text-base"
                />
              </nuxt-link>
              <p
                class="text-text-secondary text-sm font-medium capitalize max-w-full truncate overflow-hidden"
              >
                location
              </p>
            </span>
          </li>
          <li class="w-full flex items-center gap-3">
            <Icon name="iconoir:plug-type-l" class="text-3xl text-accent" />
            <span class="flex flex-col gap-0">
              <p class="text-base font-semibold leading-5">
                {{ data.eventType }}
              </p>
              <p class="text-text-secondary text-sm font-medium capitalize">
                event type
              </p>
            </span>
          </li>
          <li class="w-full flex items-center gap-3">
            <Icon name="cuida:calendar-outline" class="text-3xl text-accent" />
            <span class="flex flex-col gap-0">
              <p class="text-base font-semibold leading-5">
                {{
                  Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(data.eventStartDate))
                }}
              </p>
              <p class="text-text-secondary text-sm font-medium capitalize">
                start date
              </p>
            </span>
          </li>
          <li class="w-full flex items-center gap-3">
            <Icon name="cuida:calendar-outline" class="text-3xl text-accent" />
            <span class="flex flex-col gap-0">
              <p class="text-base font-semibold leading-5">
                {{
                  Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(data.eventEndDate))
                }}
              </p>
              <p class="text-text-secondary text-sm font-medium capitalize">
                end date
              </p>
            </span>
          </li>
          <li class="w-full flex items-center gap-3">
            <Icon
              name="material-symbols-light:location-chip"
              class="text-3xl text-accent"
            />
            <span class="flex flex-col gap-0">
              <p class="text-base font-semibold leading-5">
                {{
                  data.eventLocationType === LocationTypeValues.ONLINE
                    ? "Online"
                    : "In-site"
                }}
              </p>
              <p class="text-text-secondary text-sm font-medium capitalize">
                lcoation type
              </p>
            </span>
          </li>
        </ul>
      </div>
      <span class="place-self-end mb-6">
        <p class="text-base font-semibold capitalize">total</p>
        <p class="text-2xl font-bold text-accent">
          {{ data.ticketTypePrice <= 0 ? "Free" : "" }}
          {{
            data.ticketTypePrice?.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })
          }}
        </p>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQRCode } from "@vueuse/integrations/useQRCode";
import type { LocationType } from "~/types/events";
import { LocationType as LocationTypeValues } from "~/types/events";

export type TicketCardProps = {
  eventName: string;
  eventDescription: string;
  ticketTypeName: string;
  ticketTypeDescription: string;
  ticketTypePrice: number;
  ticketId: string;
  eventLocation: string;
  eventLocationType: LocationType;
  eventType: string;
  eventStartDate: string;
  eventEndDate: string;
  ticketCode: string;
};

const props = defineProps<{
  data: TicketCardProps;
}>();

const qrcode = useQRCode(props.data.ticketCode);
</script>
