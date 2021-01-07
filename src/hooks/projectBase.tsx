import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import { removeProjectAction } from "../redux/projects/actions";
import { ProjectType } from "../types/project";
import router from "../router";
import { PopoutManageConext } from "../context/PopoutManage";

const useProjectBase = (props?: ProjectType) => {
  const dispatch = useDispatch();
  const { setPopout } = useContext(PopoutManageConext);

  const createProject = () => {
    router.go("project/edit", { _id: null });
  };

  const editProject = () => {
    const properties = props as ProjectType;

    if (properties._id) {
      router.go("project/edit", { _id: properties._id });
    }
  };

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
                router.go("projects", {});
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
