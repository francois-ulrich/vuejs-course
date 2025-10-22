import type { BookingStatus } from "./BookingStatus";
import type { Event } from "./Event";

export interface Booking {
  id: string;
  event: Event | undefined;
  status: BookingStatus;
}
