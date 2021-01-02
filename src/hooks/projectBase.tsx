import Alert from '@vkontakte/vkui/dist/components/Alert/Alert';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProjectAction } from '../actions/projectActions';
import { RouterProps } from '../types';
import { ProjectType } from "../types/project";

const useProjectBase = (props: ProjectType & RouterProps) => {
  const dispatch = useDispatch();

  const createProject = () => {};
  const editProject = () => {};
  const removeProject = () => {

    props.setPopout(
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
            dispatch(removeProjectAction(props._id));
          },
        }]}
        actionsLayout="horizontal"
        onClose={() => props.setPopout(null)}
        header="Удаление документа"
        text="Вы уверены, что хотите удалить этот проект?"
      />
    )

  };

  const createTask = () => {};
  const editTask = () => {};
  const removeTask = () => {};

  const createStep = () => {};
  const editStep = () => {};
  const removeStep = () => {};

  return {
    createProject,
    editProject,
    removeProject,

    createTask,
    editTask,
    removeTask,

    createStep,
    editStep,
    removeStep,
  };
};

export default useProjectBase;
