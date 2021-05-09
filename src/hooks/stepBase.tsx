import { useDispatch } from "react-redux";
import router from "../router";

export const useStepBase = (projectId: string, taskId: string) => {
  const dispatch = useDispatch();

  const createStep = () => {
    console.log("createStep", projectId, taskId);
    router.go("project/task/step/edit", { projectId, taskId, stepId: null });
  };

  const editStep = (stepId: string) => {
    router.go("project/task/step/edit", { projectId, taskId, stepId });
  };

  const removeStep = (stepId: string) => {
    router.go("project/task/step/remove", { projectId, taskId, stepId });
  };

  return {
    createStep,
    editStep,
    removeStep,
  };
};
