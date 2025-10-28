import { ref } from "vue";
import type { Booking } from "../types/Booking";
import type { Event } from "../types/Event";
import {
  addBooking,
  deleteBooking,
  fetchAllBookings,
} from "../services/bookingsService";
import type { ItemListState } from "../types/ItemListState";

const bookings = ref<Booking[]>([]);

const isLoadingBookings = ref<boolean>(true);

const state = ref<ItemListState>("None");

const fetchBookings = async (events: Event[]) => {
  state.value = "Loading";

  try {
    const apiBookings = await fetchAllBookings();

    const apiBookingsWithExistingEvents = apiBookings.filter(
      (apiBooking) =>
        events.find((event) => event.id === apiBooking.eventId) != null
    );

    bookings.value = apiBookingsWithExistingEvents.map((apiBooking) => {
      const { id, eventId } = apiBooking;

      const event = events.find((event) => event.id === eventId);

      return {
        id,
        event,
        status: "Success",
      };
    });

    state.value = "Ok";
  } catch (err) {
    console.error(err);
    state.value = "Error";
  } finally {
    isLoadingBookings.value = false;
  }
};

const handleBookingCreation = async (event: Event) => {
  if (
    bookings.value.some(
      (booking) => booking.event && booking.event.id === event.id
    )
  ) {
    return;
  }

  const tempBooking: Booking = {
    id: "",
    event: event,
    status: "Pending",
  };

  try {
    bookings.value.push(tempBooking);

    const result = await addBooking(event);

    if (result === null)
      throw new Error(
        "Error when registering booking : No booking returned from API"
      );

    const tempBookingIndex = bookings.value.indexOf(tempBooking);

    const { id } = result;

    bookings.value[tempBookingIndex] = {
      id,
      event,
      status: "Success",
    };
  } catch {
    const tempBookingIndex = bookings.value.indexOf(tempBooking);

    bookings.value[tempBookingIndex] = {
      id: "",
      event,
      status: "Failed",
    };
  }
};

const handleBookingDeletion = async (bookingToDelete: Booking) => {
  const bookingIndex = bookings.value.indexOf(bookingToDelete);

  try {
    bookings.value = bookings.value.filter(
      (booking) => booking.id != bookingToDelete.id
    );

    await deleteBooking(bookingToDelete);
  } catch {
    bookings.value.splice(bookingIndex, 0, bookingToDelete);
  }
};

export default function useBookings() {
  return {
    bookings,
    isLoadingBookings,
    state,
    fetchBookings,
    handleBookingCreation,
    handleBookingDeletion,
  };
}
