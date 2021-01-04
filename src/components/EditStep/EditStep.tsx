import { Group, FormLayout, FormItem, Input, Button } from "@vkontakte/vkui";
import React, { FC, useState } from "react";
import { StepType } from "../../types/step";

type EditStepProps = { step: StepType | null };

const EditStepComponent: FC<EditStepProps> = (props: EditStepProps) => {
  const { step } = props;
  const [name, setName] = useState(step?.name);

  return (
    <Group>
      <FormLayout>
        <FormItem
          top="E-mail"
          status={name ? "valid" : "error"}
          bottom={name ? "" : "Подзадаче нужно имя"}
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
          <Button size="l" stretched>
            {"Сохранить"}
          </Button>
        </FormItem>
      </FormLayout>
    </Group>
  );
};

export default EditStepComponent;
