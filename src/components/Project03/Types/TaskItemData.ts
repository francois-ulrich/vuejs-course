import type { TaskItemPriority } from "./TaskItemPriority";

export interface TaskItemData {
  id: string;
  taskName: string;
  priority: TaskItemPriority | null;
  isDone: boolean;
}
