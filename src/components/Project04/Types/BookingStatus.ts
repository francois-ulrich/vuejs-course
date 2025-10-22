export const BookingStatus = {
  Pending: "Pending",
  Success: "Success",
} as const;

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
