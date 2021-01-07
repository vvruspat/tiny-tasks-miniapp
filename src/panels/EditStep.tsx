import React, { FC, useContext, useState } from "react";
import {
  platform,
  IOS,
  Group,
  Avatar,
  FormLayout,
  Input,
  Select,
  Button,
  SimpleCell,
  FormItem,
  CustomSelectOption,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import UserSelector from "../components/UserSelectorModal/UserSelectorModal";
import { StepType, UserType } from "../types";
import router from "../router";
import { PopoutManageConext } from "../context/PopoutManage";

type EditStepProps = {} & StepType;

const EditStep: FC<EditStepProps> = (props) => {
  const { setPopout } = useContext(PopoutManageConext);

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

  const [name, setName] = useState(props.name);
  const [status, setStatus] = useState(props.status);

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => router.go("projects")} />}
      >
        {props.name ? props.name : "Добавить шаг"}
      </PanelHeader>

      <FormLayout>
        <FormItem top="Заголовок" status={name ? "valid" : "error"}>
          <Input type="text" name="name" value={name} onChange={onNameChange} />
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
        <FormItem top="Статус" status={name ? "valid" : "error"}>
          <Select
            onChange={onStatusChange}
            value={props.status}
            placeholder="Не выбран"
            options={[
              {
                label: "Ожидает",
                value: "0",
              },
              {
                label: "В работе",
                value: "1",
              },
              {
                label: "Готово",
                value: "2",
              },
            ]}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption {...restProps} />
            )}
          ></Select>
        </FormItem>

        <Button size="l">{props.name ? "Сохранить" : "Добавить"}</Button>
      </FormLayout>
    </>
  );
};

export default EditStep;
