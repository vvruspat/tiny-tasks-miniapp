import { CommentType } from "./comment";

export type StepType = {
  id: string;
  name: string;
  owner: number;
  status: number;
  comments?: CommentType[];
};
