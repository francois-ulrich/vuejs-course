import type { ApiEvent } from "../types/ApiEvent";

export async function fetchEvents(): Promise<ApiEvent[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
  if (!response.ok) throw new Error("Erreur de chargement des tâches");
  return await response.json();
}
