import React, { FC, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import List from "@vkontakte/vkui/dist/components/List/List";
import { plural } from "../utils/helpers";
import { StateType } from "../redux/configureStore";
import { ProjectType } from "../types/project";
import { RouterProps } from "../types";

import Icon56DocumentOutline from "@vkontakte/icons/dist/56/document_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import useProjectBase from "../hooks/projectBase";

type HomeProps = {} & RouterProps;

const Home: FC<HomeProps> = (props) => {
  const { go } = props;
  const projects = useSelector(
    (state: StateType) => state.projects.projects,
    shallowEqual
  );

  const { createProject } = useProjectBase(props);

  return (
    <>
      <PanelHeader
        left={
          <PanelHeaderButton
            onClick={() => {
              createProject();
            }}
          >
            <Icon28AddOutline />
          </PanelHeaderButton>
        }
        fixed={false}
      >
        Проекты
      </PanelHeader>

      <Group title="Проекты">
        {!projects || projects?.length === 0 ? (
          <Placeholder
            icon={<Icon56DocumentOutline />}
            action={
              <Button
                size="l"
                onClick={() => {
                  createProject();
                }}
              >
                Создать
              </Button>
            }
          >
            Сейчас, у вас нет активных проектов, но вы можете создать проект
            прямо сейчас
          </Placeholder>
        ) : (
          <List>
            {projects.map((project: ProjectType, index: number) => {
              return (
                <SimpleCell
                  onClick={go.bind(this, "project", project)}
                  key={index}
                  expandable
                  description={`${project.tasks?.length ?? 0} ${plural(
                    project.tasks?.length ?? 0,
                    "задач",
                    "задача",
                    "задачи"
                  )}`}
                >
                  {project.name}
                </SimpleCell>
              );
            })}
          </List>
        )}
      </Group>
    </>
  );
};

export default Home;
