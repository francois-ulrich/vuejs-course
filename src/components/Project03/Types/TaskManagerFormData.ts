import type { TaskItemPriority } from "./TaskItemPriority";

export default interface TaskManagerFormData {
  taskName: string;
  priority: TaskItemPriority | null;
}
