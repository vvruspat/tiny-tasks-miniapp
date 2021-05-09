import { StepType } from "./step";

export type TaskType = {
  _id?: string;
  name: string;
  steps: StepType[];
};
