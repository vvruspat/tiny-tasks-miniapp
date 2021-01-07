import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import { removeProjectAction } from "../redux/projects/actions";
import { StepType, TaskType } from "../types";
import { ProjectType } from "../types/project";
import { PopoutManageConext } from '../context/PopoutManage';

export const useProjectBase = (
  props: ProjectType
) => {
  const dispatch = useDispatch();
  const { setPopout } = useContext(PopoutManageConext);

  const createProject = () => {};
  const editProject = () => {};
  const removeProject = () => {
    const { _id } = props as ProjectType;

    if (_id) {
      setPopout(
        <Alert
          actions={[
            {
              title: "Отмена",
              autoclose: true,
              mode: "cancel",
            },
            {
              title: "Удалить",
              autoclose: true,
              mode: "destructive",
              action: () => {
                dispatch(removeProjectAction(_id));
              },
            },
          ]}
          actionsLayout="horizontal"
          onClose={() => setPopout(null)}
          header="Удаление документа"
          text="Вы уверены, что хотите удалить этот проект?"
        />
      );
    }
  };

  return {
    createProject,
    editProject,
    removeProject,
  };
};

export const useTaskBase = (task?: TaskType) => {
  const dispatch = useDispatch();

  const createTask = () => {};
  const editTask = () => {};
  const removeTask = () => {};

  return {
    createTask,
    editTask,
    removeTask,
  };
};

export const useStepBase = (step?: StepType) => {
  const dispatch = useDispatch();

  const createStep = () => {};
  const editStep = () => {};
  const removeStep = () => {};

  return {
    createStep,
    editStep,
    removeStep,
  };
};
