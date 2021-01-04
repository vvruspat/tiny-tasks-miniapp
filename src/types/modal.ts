import { StepType } from './step';
import { ProjectType } from './project';
import { TaskType } from './task';

export type ModalParamsType = {
    id: "editProject";
    props: ProjectType;
  } |
  {
    id: "editTask"; props: TaskType;
  } |
  {
    id: "editStep"; props: StepType;
  };