import type { ApiBooking } from "../types/ApiBooking";
import type { Booking } from "../types/Booking";
import type { Event } from "../types/Event";

export async function fetchAllBookings(): Promise<ApiBooking[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`);
  if (!response.ok) throw new Error("Error when getting bookings");
  return await response.json();
}

export const addBooking = async (event: Event): Promise<ApiBooking | null> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    body: JSON.stringify({
      eventId: event.id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error(`Error when posting new booking : (${response.status})`);
  }

  return (await response.json()) as ApiBooking;
};

export const deleteBooking = async (booking: Booking): Promise<boolean> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/${booking.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error when deleting booking : (${response.status})`);
  }

  return true;
};
