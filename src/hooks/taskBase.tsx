import router from '../router';

export const useTaskBase = (projectId: string) => {
  const createTask = () => {
    router.go("project/task/edit", { projectId, taskId: null });
  };
  const editTask = (taskId: string) => {
    router.go("project/task/edit", { projectId, taskId });
  };
  const removeTask = (taskId: string) => {
    router.go("project/task/remove", { projectId, taskId });
  };

  return {
    createTask,
    editTask,
    removeTask,
  };
};
