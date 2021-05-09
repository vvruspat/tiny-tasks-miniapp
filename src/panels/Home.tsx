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

import Icon56DocumentOutline from "@vkontakte/icons/dist/56/document_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon28SlidersOutline from "@vkontakte/icons/dist/28/sliders_outline";

import useProjectBase from "../hooks/projectBase";
import router from "../router";
import { IconButton } from "@vkontakte/vkui";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  const projects = useSelector(
    (state: StateType) => state.projects,
    shallowEqual
  );
  const { createProject, editProject } = useProjectBase();

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
        {!projects?.projects || projects?.projects?.length === 0 ? (
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
            {projects?.projects.map((project: ProjectType, index: number) => {
              return (
                <SimpleCell
                  onClick={() => router.go("project", { _id: project._id })}
                  key={index}
                  after={
                    <IconButton
                      icon={<Icon28SlidersOutline />}
                      onClick={(event) => {
                        event.stopPropagation();
                        editProject(project);
                      }}
                    />
                  }
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
