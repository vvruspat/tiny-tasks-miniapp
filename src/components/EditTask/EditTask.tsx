import { Group, FormLayout, FormItem, Input, Button } from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/configureStore";
import { updateProjectAction } from "../../redux/projects/actions";
import { TaskType } from "../../types/task";

type EditTaskProps = {
  onClose: () => void;
  _id: string;
  taskId: string | null;
};
const EditTaskComponent: FC<EditTaskProps> = (props: EditTaskProps) => {
  const dispatch = useDispatch();

  const { taskId } = props;
  const defaultTask: TaskType = {
    name: "Новая задача",
    steps: [],
  };
  const [isLoading, setLoading] = useState(false);

  const project = useSelector(
    (state: StateType) =>
      state.projects.projects.find((_project) => _project._id === props._id)!,
    shallowEqual
  );
  const task =
    project.tasks.find((_task) => _task._id === taskId) || defaultTask;
  const [name, setName] = useState(task?.name ?? defaultTask.name);
  const error = useSelector((state: StateType) => state.projects.error);
  const isFetching = useSelector(
    (state: StateType) => state.projects.isFetching
  );

  useEffect(() => {
    if (!isFetching && !error && isLoading) {
      props.onClose();
      setLoading(false);
    }
  }, [isFetching, error, isLoading]);

  const onSaveClicked = () => {
    const updatedTask = {
      ...task,
      name,
    };

    if (updatedTask._id) {
      project.tasks = project.tasks.map((_task) =>
        _task._id === updatedTask._id ? updatedTask : _task
      );
    } else {
      project.tasks.push(updatedTask);
    }

    dispatch(updateProjectAction(project));
    setLoading(true);
  };

  return (
    <Group>
      <FormLayout>
        <FormItem
          top="Название"
          status={name ? "valid" : "error"}
          bottom={name ? "" : "Кажется, у задачи должно быть имя :)"}
        >
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
        </FormItem>
        <FormItem>
          <Button size="l" stretched onClick={onSaveClicked}>
            {taskId ? "Сохранить" : "Создать"}
          </Button>
        </FormItem>
      </FormLayout>
    </Group>
  );
};

export default EditTaskComponent;
