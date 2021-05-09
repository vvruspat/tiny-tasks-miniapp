import { CommentType } from "./comment";

export type StepType = {
  _id?: string;
  name: string;
  creator: number;
  assignee: number;
  status: number;
  comments?: CommentType[];
};
