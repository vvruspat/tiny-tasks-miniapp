import React, { FC } from "react";
import { Card, List, Header, SimpleCell, Button, IconButton } from "@vkontakte/vkui";
import Icon16MoreVertical from '@vkontakte/icons/dist/16/more_vertical';
import Icon20SlidersOutline from '@vkontakte/icons/dist/20/sliders_outline';
import Step from "../Step/Step";
import { TaskType } from "../../types";

import "./Task.css";
import { useTaskBase } from "../../hooks/taskBase";
import { useStepBase } from "../../hooks/stepBase";
import router from '../../router';

type TaskProps = TaskType;

const Task: FC<TaskProps> = (props) => {
  const routerState = router.getState();
  const { createStep } = useStepBase(routerState.params._id, props._id!);
  const { editTask, createTask } = useTaskBase(routerState.params._id);

  const onEditTask = (taskId?: string) => {
    if (taskId) {
      editTask(taskId);
    } else {
      createTask();
    }
  }

  return (
    <Card style={{ width: 250 }}>
      <Header mode="secondary" aside={<Icon20SlidersOutline onClick={() => onEditTask(props._id)} />}>
        {props.name}
      </Header>
      <List>
        {props.steps &&
          props.steps.map((step, index) => <Step {...step} key={index} />)}
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
