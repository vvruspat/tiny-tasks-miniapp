import { StepType } from "./step";
import { ProjectType } from "./project";
import { TaskType } from "./task";

export type ModalParamsType =
  | {
      id: "editProject";
      projectId?: string;
    }
  | {
      id: "editTask";
      props: TaskType;
    }
  | {
      id: "editStep";
      props: StepType;
    };
