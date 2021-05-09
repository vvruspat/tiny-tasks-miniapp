import {
  Group,
  FormLayout,
  FormItem,
  Input,
  Button,
  CustomSelectOption,
  Select,
  SimpleCell,
  Avatar,
} from "@vkontakte/vkui";
import React, { FC, useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PopoutManageConext } from "../../context/PopoutManage";
import { StateType } from "../../redux/configureStore";
import { updateProjectAction } from "../../redux/projects/actions";
import router from "../../router";
import { UserType } from "../../types";
import { StepType } from "../../types/step";
import UserSelector from "../UserSelectorModal/UserSelectorModal";

type EditStepProps = {
  onClose: () => void;
  _id: string;
  taskId: string;
  stepId: string | null;
};

const EditStepComponent: FC<EditStepProps> = (props: EditStepProps) => {
  const dispatch = useDispatch();
  const defaultStep: StepType = {
    name: "Подзадача",
    creator: 0,
    assignee: 0,
    status: 0,
    comments: [],
  };

  const routerState = router.getState();
  const { _id, taskId, stepId } = routerState.params;

  console.log("routerState.params", routerState.params);

  const project = useSelector(
    (state: StateType) =>
      state.projects.projects.find((_project) => _project._id === _id)!,
    shallowEqual
  );
  const task = project.tasks.find((_task) => _task._id === taskId)!;
  const step = task?.steps.find((_step) => _step._id === stepId) ?? defaultStep;

  const { setPopout } = useContext(PopoutManageConext);

  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState(step.name);
  const [status, setStatus] = useState(step.status);
  const [assignee, setAssignee] = useState(step.assignee);
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

  const onUserSelect = (user: UserType) => {
    console.log("user", user);
    setPopout(null);
  };

  const showUserSelect = () => {
    setPopout(
      <UserSelector onSelect={onUserSelect} onClose={() => setPopout(null)} />
    );
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    setName(newName);
  };

  const onStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;

    setStatus(Number(newStatus));
  };

  const onSaveStepClick = () => {
    const updatedStep = {
      ...step,
      name,
      status,
      assignee,
    };

    if (updatedStep._id) {
      task.steps = task.steps.map((_step) =>
        _step._id === stepId ? updatedStep : _step
      );
    } else {
      task.steps.push(updatedStep);
    }

    console.log("Updated steps", task.steps);

    project.tasks = project.tasks.map((_task) =>
      _task._id === taskId ? task : _task
    );

    dispatch(updateProjectAction(project));
    setLoading(true);
  };

  return (
    <Group>
      <FormLayout>
        <FormItem top="Заголовок" status={name ? "valid" : "error"}>
          <Input type="text" name="name" value={name} onChange={onNameChange} />
        </FormItem>
        <FormItem top="Статус" status={name ? "valid" : "error"}>
          <Select
            onChange={onStatusChange}
            value={status}
            placeholder="Не выбран"
            options={[
              {
                label: "Ожидает",
                value: 0,
              },
              {
                label: "В работе",
                value: 1,
              },
              {
                label: "Готово",
                value: 2,
              },
            ]}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption {...restProps} />
            )}
          ></Select>
        </FormItem>
        <Group>
          <SimpleCell
            before={
              <Avatar src="https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1" />
            }
            onClick={showUserSelect}
          >
            Назначить исполнителя
          </SimpleCell>
        </Group>

        <FormItem>
          <Button size="l" stretched onClick={onSaveStepClick}>
            {step?._id ? "Сохранить" : "Добавить"}
          </Button>
        </FormItem>
      </FormLayout>
    </Group>
  );
};

export default EditStepComponent;
