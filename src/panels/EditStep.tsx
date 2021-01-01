import React, { FC, useState } from "react";
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
} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import UserSelector from "../components/UserSelectorModal/UserSelectorModal";
import { RouterProps, StepType, UserType } from "../types";

const osName = platform();

type EditStepProps = {} & StepType & RouterProps;

const EditStep: FC<EditStepProps> = (props) => {
  const onUserSelect = (user: UserType) => {
    console.log("user", user);
    props.setPopout(null);
  };

  const showUserSelect = () => {
    props.setPopout(
      <UserSelector
        onSelect={onUserSelect}
        onClose={() => props.setPopout(null)}
      />
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
        left={
          <PanelHeaderButton onClick={props.go.bind(this, "home")}>
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        {props.name ? props.name : "Добавить шаг"}
      </PanelHeader>

      <FormLayout>
        <Input
          type="text"
          top="Заголовок"
          name="name"
          value={name}
          onChange={onNameChange}
          status={name ? "valid" : "error"}
        />

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

        <Select top="Статус" onChange={onStatusChange} value={props.status}>
          <option value="0">Ожидает</option>
          <option value="1">В работе</option>
          <option value="2">Готово</option>
        </Select>

        <Button size="xl">{props.name ? "Сохранить" : "Добавить"}</Button>
      </FormLayout>
    </>
  );
};

export default EditStep;
