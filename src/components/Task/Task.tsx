import React, { FC } from "react";
import { Card, List, Header, SimpleCell, Button } from "@vkontakte/vkui";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import Step from "../Step/Step";
import { TaskType } from "../../types";

import "./Task.css";

type TaskProps = {
  setPopout: (popout: React.ReactNode) => void;
  go: (name: string, props?: any) => void;
} & TaskType;

const Task: FC<TaskProps> = (props) => (
  <Card style={{ width: 250 }}>
    <Header mode="secondary" aside={<Icon16Cancel />}>
      {props.name}
    </Header>
    <List>
      {props.steps &&
        props.steps.map((step, index) => (
          <Step
            {...step}
            key={index}
            setPopout={props.setPopout}
            go={props.go}
          />
        ))}
      <SimpleCell>
        <Button mode="secondary" onClick={() => props.go("editStep")}>
          Добавить шаг
        </Button>
      </SimpleCell>
    </List>
  </Card>
);

export default Task;
