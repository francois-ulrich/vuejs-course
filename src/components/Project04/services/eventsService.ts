import type { ApiEvent } from "../types/ApiEvent";

export async function fetchAllEvents(): Promise<ApiEvent[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
  if (!response.ok) throw new Error("Error when loading events");
  return await response.json();
}
