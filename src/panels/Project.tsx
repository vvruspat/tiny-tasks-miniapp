import React, { FC, useContext, useState } from "react";
import {
  CardScroll,
  Cell,
  PanelHeaderContext,
  List,
  PanelHeaderContent,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import Task from "../components/Task/Task";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { ProjectType } from "../types/project";
import useProjectBase from "../hooks/projectBase";

import Icon56DocumentOutline from "@vkontakte/icons/dist/56/document_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon28WriteOutline from "@vkontakte/icons/dist/28/write_outline";
import Icon28DeleteOutline from "@vkontakte/icons/dist/28/delete_outline";
import Icon28SlidersOutline from "@vkontakte/icons/dist/28/sliders_outline";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";

import Chart from "../components/Chart/Chart";

import { calculateProjectStat } from "../utils/helpers";
import { useTaskBase } from "../hooks/taskBase";
import router from "../router";
import { shallowEqual, useSelector } from "react-redux";
import { StateType } from "../redux/configureStore";

type ProjectProps = {};

const Project: FC<ProjectProps> = (props) => {
  const routerState = router.getState();
  const project = useSelector(
    (state: StateType) =>
      state.projects.projects.find(
        (_project) => _project._id === routerState.params._id
      )!,
    shallowEqual
  );
  const [isContextOpened, setContextState] = useState(false);
  const { editProject, removeProject } = useProjectBase();
  const { createTask, editTask, removeTask } = useTaskBase(
    router.getState().params._id
  );

  const onEditProjectClick = () => {
    setContextState(false);
    editProject(project);
  };
  const onRemoveProjectClick = () => {
    setContextState(false);
    removeProject(project);
  };

  const onCreateTaskClick = () => {
    setContextState(false);
    createTask();
  };

  const onEditTaskClick = (taskId: string) => {
    editTask(taskId);
  };

  const onRemoveTaskClick = (taskId: string) => {
    removeTask(taskId);
  };

  return (
    <>
      <PanelHeader
        fixed={false}
        left={<PanelHeaderBack onClick={() => router.back()} />}
      >
        <PanelHeaderContent
          before={<></>}
          status={<></>}
          aside={
            <Icon16Dropdown
              style={{
                transform: `rotate(${isContextOpened ? "180deg" : "0"})`,
              }}
            />
          }
          onClick={() => setContextState(!isContextOpened)}
        >
          {project.name}
        </PanelHeaderContent>
      </PanelHeader>

      <PanelHeaderContext
        opened={isContextOpened}
        onClose={() => setContextState(!isContextOpened)}
      >
        <List>
          <Cell before={<Icon28SlidersOutline />} onClick={onEditProjectClick}>
            Настройки проекта
          </Cell>
          <Cell before={<Icon28AddOutline />} onClick={onCreateTaskClick}>
            Добавить задачу
          </Cell>
          <Cell before={<Icon28DeleteOutline />} onClick={onRemoveProjectClick}>
            Удалить проект
          </Cell>
        </List>
      </PanelHeaderContext>

      {!project.tasks || project.tasks.length === 0 ? (
        <>
          <Placeholder
            icon={<Icon56DocumentOutline />}
            action={
              <Button size="l" onClick={onCreateTaskClick}>
                Добавить
              </Button>
            }
          >
            В вашем проекте нет ни одной задачи.
          </Placeholder>
        </>
      ) : (
        <>
          <Chart data={calculateProjectStat(project)} />

          <CardScroll>
            {project.tasks &&
              project.tasks.map((task, index) => (
                <Task {...task} key={index} />
              ))}
          </CardScroll>
        </>
      )}
    </>
  );
};

export default Project;
