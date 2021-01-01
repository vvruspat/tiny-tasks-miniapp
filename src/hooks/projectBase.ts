import { ProjectType } from '../types/project';

const useProjectBase = (project: ProjectType) => {

    const createProject = () => {};
    const renameProject = () => {};
    const removeProject = () => {};
    
    const createTask = () => {};
    const editTask = () => {};
    const removeTask = () => {};

    const createStep = () => {};
    const editStep = () => {};
    const removeStep = () => {};

    return {
        createProject,
        renameProject,
        removeProject,

        createTask,
        editTask,
        removeTask,

        createStep,
        editStep,
        removeStep,
    }
};

export default useProjectBase;