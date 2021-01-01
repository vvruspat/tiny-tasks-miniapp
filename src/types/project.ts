import { TaskType } from "./task";

export type ProjectType = {
  _id: string;
  name: string;
  tasks: TaskType[];
};
