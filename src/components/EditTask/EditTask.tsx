import { Group, FormLayout, FormItem, Input, Button } from '@vkontakte/vkui';
import React, { FC, useState } from 'react';
import { TaskType } from '../../types/task';

type EditTaskProps = {task: TaskType | null};

const EditTaskComponent: FC<EditTaskProps> = (props: EditTaskProps) => {
    const { task } = props;
    const [ name, setName ] = useState(task?.name);

    return <Group>
    <FormLayout>
      <FormItem
        top="E-mail" 
        status={name ? 'valid' : 'error'}
        bottom={name ? '' : 'Кажется, у задачи должно быть имя :)'}
      >
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        />
      </FormItem>
      <FormItem>
        <Button size="l" stretched>{"Сохранить"}</Button>
      </FormItem>
    </FormLayout>
  </Group>;
}

export default EditTaskComponent;