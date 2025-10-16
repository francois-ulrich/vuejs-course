import type { Booking } from "./Booking";
import type { Event } from "./Event";

export interface EventBooking {
  events: Event[];
  bookings: Booking[];
}
