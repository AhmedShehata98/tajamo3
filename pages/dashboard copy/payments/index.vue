<template>
  <div class="flex flex-col gap-4 p-4">
    <h1 class="text-2xl font-bold text-text-primary">Payments</h1>
    <div class="w-fit flex items-start justify-start gap-4 p-2 glass-card">
      <figure>
        <img
          :src="eventDetailsState.event?.image"
          alt="order-image"
          class="w-44 h-44 rounded-lg object-cover"
        />
      </figure>
      <div class="flex flex-col items-start justify-start gap-2 divide-y-2">
        <span class="py-4">
          <h4 class="text-lg font-semibold text-text-primary">
            {{ eventDetailsState.event?.name }}
          </h4>
          <p class="text-secondary-text max-w-md">
            {{ eventDetailsState.event?.description }}
          </p>
        </span>
        <span>
          <h5 class="flex items-center gap-1 capitalize">
            <Icon name="famicons:ticket-sharp" class="text-2xl" />
            {{ eventDetailsState.selectedTicketType?.name }}
          </h5>
          <p class="text-accent font-semibold">
            {{
              eventDetailsState.selectedTicketType?.price?.toLocaleString(
                "en-EG",
                { style: "currency", currency: "EGP" }
              )
            }}
          </p>
        </span>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-start gap-4 bg-class p-4 h-[calc(100vh-10rem)]"
    >
      <ul class="w-4/5 flex flex-col gap-2 grid grid-cols-2 gap-4">
        <li
          class="flex flex-col items-center gap-2 glass-card p-6 hover:scale-105 hover:translate-y-[-14px] transition-all duration-300"
        >
          <h4 class="text-3xl text-center font-bold text-text-primary">
            Fawry
          </h4>
          <p class="text-sm secondary-text">
            Fawry is a payment gateway that allows you to accept payments from
            your customers.
          </p>
          <figure class="size-48 flex items-center justify-center p-2 mt-4">
            <img
              src="/images/fawry.png"
              alt="Fawry"
              width="128"
              height="128"
              class="rounded-lg w-full"
            />
          </figure>
          <button
            type="button"
            @click="bookPaidTicket"
            class="btn bg-accent w-fit self-center size-14 aspect-square rounded-full mt-auto mb-4 hover:bg-accent/80"
          >
            <Icon name="mdi:arrow-right" class="w-6 h-6" />
          </button>
        </li>
        <li
          class="flex flex-col items-center gap-2 glass-card p-6 hover:scale-105 hover:translate-y-[-10px] transition-all duration-300"
        >
          <h4 class="text-3xl text-center font-bold text-text-primary">
            Credit Card
          </h4>
          <p class="text-sm secondary-text">
            Credit Card is a payment gateway that allows you to accept payments
            from your customers.
          </p>
          <figure class="size-48 flex items-center justify-center p-2 mt-4">
            <img
              src="/images/credit-card.png"
              width="128"
              height="128"
              alt="Credit Card"
              class="rounded-lg w-full"
            />
          </figure>
          <button
            type="button"
            @click="bookTicketWithPaymobCreditCard"
            :disabled="isLoadingCreditCard"
            class="btn bg-accent w-fit self-center size-14 aspect-square rounded-full mt-auto mb-4 hover:bg-accent/80"
          >
            <Icon
              v-if="!isLoadingCreditCard"
              name="mdi:arrow-right"
              class="w-6 h-6"
            />
            <Icon v-else name="mdi:loading" class="w-12 h-12 animate-spin" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookFacade } from "~/services/booking/book.facade";
const isLoadingCreditCard = ref(false);
const { userStore } = useUser();
const { eventDetailsState } = useEventDetailsState();
const bookTicketWithPaymobCreditCard = async () => {
  try {
    console.log("bookPaidTicket");
    if (!eventDetailsState.value.event) {
      throw new Error("Event not found");
    }
    if (!userStore.value) {
      throw new Error("User not found");
    }
    if (!eventDetailsState.value.selectedTicketType) {
      throw new Error("Ticket type not found");
    }
    isLoadingCreditCard.value = true;
    const bookFacade = new BookFacade(
      eventDetailsState.value.event,
      userStore.value
    );
    const bookingResponse = await bookFacade.bookPaidTicket(
      eventDetailsState.value.selectedTicketType.id,
      "paymob_credit_card"
    );

    const checkoutUrl = bookingResponse.payment.extraData.checkoutUrl;
    window.open(checkoutUrl);
  } catch (error) {
    console.error("Error booking paid ticket: ", error);
  } finally {
    isLoadingCreditCard.value = false;
  }
};

const bookFreeTicket = () => {
  console.log("bookFreeTicket");
};

definePageMeta({
  pageTransition: { name: "page", mode: "default" },
  layout: "dashboard",
});
useHead({
  title: "Payments",
  meta: [
    {
      name: "description",
      content: "Payments page for the dashboard of the user to manage payments",
    },
  ],
});
</script>

<style scoped></style>
