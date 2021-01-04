import React, { FC } from "react";
import { Card, List, Header, SimpleCell, Button } from "@vkontakte/vkui";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import Step from "../Step/Step";
import { RouterProps, TaskType } from "../../types";

import "./Task.css";
import { useStepBase } from "../../hooks/taskBase";

type TaskProps = TaskType & RouterProps;

const Task: FC<TaskProps> = (props) => {
  const { createStep } = useStepBase(props);

  return (
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
              setModal={props.setModal}
              go={props.go}
            />
          ))}
        <SimpleCell>
          <Button mode="secondary" onClick={() => createStep()}>
            Добавить шаг
          </Button>
        </SimpleCell>
      </List>
    </Card>
  );
};

export default Task;
