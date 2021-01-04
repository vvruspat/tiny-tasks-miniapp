import React from 'react';
import { useDispatch } from 'react-redux';
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert';
import { removeProjectAction } from '../actions/projectActions';
import { RouterProps, StepType, TaskType } from '../types';
import { ProjectType } from "../types/project";

export const useProjectBase = (props: RouterProps | ProjectType & RouterProps) => {
  const dispatch = useDispatch();

  const createProject = () => {};
  const editProject = () => {};
  const removeProject = () => {
    const { _id, setPopout } = props as ProjectType & RouterProps;

    if (_id) {
      setPopout(
        <Alert
          actions={[{
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel'
          }, {
            title: 'Удалить',
            autoclose: true,
            mode: 'destructive',
            action: () => {
              dispatch(removeProjectAction(_id));
            },
          }]}
          actionsLayout="horizontal"
          onClose={() => setPopout(null)}
          header="Удаление документа"
          text="Вы уверены, что хотите удалить этот проект?"
        />
      )
    }
  };

  return {
    createProject,
    editProject,
    removeProject,
  };
};

export const useTaskBase = (props: RouterProps, task?: TaskType) => {
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

export const useStepBase = (props: RouterProps, step?: StepType) => {
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
