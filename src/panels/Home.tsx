import React, { FC, useEffect } from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import List from "@vkontakte/vkui/dist/components/List/List";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { plural } from "../utils/helpers";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon56DocumentOutline from "@vkontakte/icons/dist/56/document_outline";
import { shallowEqual, useSelector } from "react-redux";
import { ProjectType } from "../types/project";
import { RouterProps } from "../types";
import { StateType } from "../reducers/configureStore";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";

type HomeProps = {} & RouterProps;

const Home: FC<HomeProps> = ({ go }) => {
  const projects = useSelector(
    (state: StateType) => state.projects,
    shallowEqual
  );

  return (
    <>
      <PanelHeader
        right={
          <PanelHeaderButton>
            <Icon28AddOutline />
          </PanelHeaderButton>
        }
      >
        Проекты
      </PanelHeader>

      <Group title="Проекты">
        {!projects || projects.length === 0 ? (
          <Placeholder
            icon={<Icon56DocumentOutline />}
            action={<Button size="l">Создать</Button>}
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
