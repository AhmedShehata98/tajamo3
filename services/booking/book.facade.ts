import type { Order } from "~/types/order";
import { nanoid } from "nanoid";
import {
  PaymentFactoryContext,
  type PaymentFactory,
  type PaymentMethod,
} from "../payments/payment.factory";
import { createOrder } from "../orders/order";
import { getTicketType } from "../ticket-types/ticket-type";
import type { EventDetails } from "~/types/events";
import type { User } from "~/types/users";

class BookFacade {
  private readonly payment: PaymentFactory;
  constructor(
    private readonly event: EventDetails,
    private readonly user: User
  ) {
    this.event = event;
    this.user = user;
    this.payment = new PaymentFactoryContext();
  }

  generateTicketCode() {
    return `TICKET-${nanoid(10)}`;
  }
  async bookFreeTicket(ticketTypeId: number) {
    try {
      const ticketType = await getTicketType(ticketTypeId);
      if (!ticketType) {
        throw new Error("Ticket type not found");
      }
      const order = await createOrder({
        event_id: this.event.id,
        ticket_type_id: ticketTypeId,
        user_id: this.user.id,
        final_amount: ticketType.data.price,
        status: "pending",
      });
      const payment = await this.payment
        .createPayment("paymob_credit_card")
        .pay({
          amount: ticketType.data.price,
          currency: "EGP",
          orders: [
            {
              id: order.id,
              name: `Booking event ${this.event.name}`,
              amount: ticketType.data.price,
              description: `Booking event ${this.event.name},with ticket ${ticketType.data.name}`,
              quantity: 1,
            },
          ],
          billingData: {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            phone_number: this.user.phone,
            email: this.user.email,
            building: "Unknown",
            city: "Unknown",
            floor: "Unknown",
            state: "Unknown",
            street: "Unknown",
            apartment: "Unknown",
            country: "Unknown",
          },
        });

      return { order, payment };
    } catch (error) {
      throw new Error("Failed to book free ticket");
    }
  }

  async bookPaidTicket(ticketTypeId: number, paymentMethod: PaymentMethod) {
    let order: Order | null = null;
    try {
      const ticketType = await getTicketType(ticketTypeId);
      if (!ticketType || !ticketType.data) {
        throw new Error("Ticket type not found");
      }

      order = await createOrder({
        event_id: this.event.id,
        ticket_type_id: ticketType.data.id,
        user_id: this.user.id,
        final_amount: ticketType.data.price,
        status: "pending",
      });

      const payment = await this.payment.createPayment(paymentMethod).pay({
        amount: ticketType.data.price,
        currency: "EGP",
        orders: [
          {
            id: order.id,
            name: `${this.event.name}`,
            amount: ticketType.data.price,
            description: `Booking event ${this.event.name},with ticket ${ticketType.data.name}`,
            quantity: 1,
          },
        ],
        billingData: {
          apartment: "Unknown",
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          phone_number: this.user.phone,
          email: this.user.email,
          street: "Unknown",
          building: "Unknown",
          city: "Unknown",
          country: "Unknown",
          floor: "Unknown",
          state: "Unknown",
        },
      });

      return { order, payment };
    } catch (error) {
      if (order) {
        // If order was created, we should update its status to failed
        await removeOrderById(order.id);
      }
      if (import.meta.dev) {
        console.log("error: ", error);
      }
      throw new Error("Failed to book paid ticket");
    }
  }
}

export { BookFacade };
