export const TaskItemPriority = {
  High: "High",
  Medium: "Medium",
  Low: "Low",
} as const;

export type TaskItemPriority =
  (typeof TaskItemPriority)[keyof typeof TaskItemPriority];
