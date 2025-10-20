import type { ApiBooking } from "../types/ApiBooking";

export async function fetchAllBookings(): Promise<ApiBooking[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`);
  if (!response.ok) throw new Error("Error when loading bookings");
  return await response.json();
}

// const addBooking = async (booking: Booking) => {

// };

// const removeBooking = async (bookingId: string) => {};
