import React, { FC, useState } from "react";
import {
  platform,
  IOS,
  CardScroll,
  Cell,
  PanelHeaderContext,
  List,
  PanelHeaderContent,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import Task from "../components/Task/Task";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { ProjectType } from "../types/project";
import { RouterProps } from "../types";
import useProjectBase from "../hooks/projectBase";

import Icon56DocumentOutline from "@vkontakte/icons/dist/56/document_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon28WriteOutline from "@vkontakte/icons/dist/28/write_outline";
import Icon28DeleteOutline from "@vkontakte/icons/dist/28/delete_outline";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";

import Chart from "../components/Chart/Chart";

import { calculateProjectStat } from "../utils/helpers";
import { useTaskBase } from "../hooks/stepBase";

type ProjectProps = {} & ProjectType & RouterProps;

const Project: FC<ProjectProps> = (props) => {
  const [isContextOpened, setContextState] = useState(false);
  const { editProject, removeProject } = useProjectBase(props);
  const { createTask } = useTaskBase(props);

  return (
    <>
      <PanelHeader
        fixed={false}
        left={<PanelHeaderBack onClick={props.go.bind(this, "home")} />}
        // right={
        //   <PanelHeaderButton>
        //     <Icon28AddOutline />
        //   </PanelHeaderButton>
        // }
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
          {props.name}
        </PanelHeaderContent>
      </PanelHeader>

      <PanelHeaderContext
        opened={isContextOpened}
        onClose={() => setContextState(!isContextOpened)}
      >
        <List>
          <Cell before={<Icon28WriteOutline />} onClick={editProject}>
            Переименовать
          </Cell>
          <Cell before={<Icon28AddOutline />} onClick={createTask}>
            Добавить задачу
          </Cell>
          <Cell before={<Icon28DeleteOutline />} onClick={removeProject}>
            Удалить проект
          </Cell>
        </List>
      </PanelHeaderContext>

      {!props.tasks || props.tasks.length === 0 ? (
        <>
          <Placeholder
            icon={<Icon56DocumentOutline />}
            action={<Button size="l">Создать</Button>}
          >
            В вашем проекте нет ни одной задачи.
          </Placeholder>
        </>
      ) : (
        <>
          <Chart data={calculateProjectStat(props)} />

          <CardScroll>
            {props.tasks &&
              props.tasks.map((task, index) => (
                <Task
                  {...task}
                  key={index}
                  setPopout={props.setPopout}
                  setModal={props.setModal}
                  go={props.go}
                />
              ))}
          </CardScroll>
        </>
      )}
    </>
  );
};

export default Project;
