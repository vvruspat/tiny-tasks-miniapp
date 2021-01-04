import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import { removeProjectAction } from "../actions/projectActions";
import { RouterProps } from "../types";
import { ProjectType } from "../types/project";

const useProjectBase = (props: RouterProps | (ProjectType & RouterProps)) => {
  const dispatch = useDispatch();

  const createProject = () => {
    const newProject: ProjectType = {
      name: "Новый проект",
      tasks: [],
    };

    props.setModal({ id: "editProject", props: newProject });
  };

  const editProject = () => {};
  const removeProject = () => {
    const { _id, setPopout } = props as ProjectType & RouterProps;

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

export default useProjectBase;
