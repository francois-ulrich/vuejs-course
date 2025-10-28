import { ref } from "vue";
import type { ItemListState } from "../types/ItemListState";
import { fetchAllEvents } from "../services/eventsService";
import type { Event } from "../types/Event";

const events = ref<Event[]>([]);
const isLoadingEvents = ref<boolean>(true);
const state = ref<ItemListState>("None");

const fetchEvents = async () => {
  state.value = "Loading";

  try {
    const apiEvents = await fetchAllEvents();

    events.value = apiEvents.map((apiEvent) => {
      const { id, title, date, description } = apiEvent;

      return {
        id,
        title,
        date: new Date(date),
        description,
      };
    });

    state.value = "Ok";
  } catch (err) {
    console.error(err);
    state.value = "Error";
    isLoadingEvents.value = false;
  }
};

export default function useEvents() {
  return {
    events,
    isLoadingEvents,
    state,
    fetchEvents,
  };
}
