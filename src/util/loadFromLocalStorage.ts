/**
 * Récupère et parse un objet typé depuis le localStorage
 * @param key - Clé dans le localStorage
 * @returns L'objet typé retourné
 */
export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) return defaultValue;

  try {
    return JSON.parse(localStorageData) as T;
  } catch (err) {
    console.error(
      `Erreur de parsing du localStorage pour la clé "${key}":`,
      err
    );
    return defaultValue;
  }
}
