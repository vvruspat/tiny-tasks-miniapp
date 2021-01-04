import { Group, FormLayout, FormItem, Input, Button, Spinner } from '@vkontakte/vkui';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectAction } from '../../actions/projectActions';
import { StateType } from '../../redux/configureStore';
import { ProjectType } from '../../types/project';

type EditProjectProps = {onClose: () => void, project: ProjectType | null};

const EditProjectComponent: FC<EditProjectProps> = (props: EditProjectProps) => {
    const [ name, setName ] = useState(props?.project?.name ?? "");
    const dispatch = useDispatch();

    const error = useSelector((state: StateType) => state.projects.error);
    const isFetching = useSelector((state: StateType) => state.projects.isFetching);

    useEffect(() => {
      if (!isFetching && !error) {
        props.onClose();
      }
    }, [isFetching, error]);

    const onCreateProjectClick = () => {
      const newProject: ProjectType = {
        ...props.project ?? {
          tasks: [],
        },
        name: name,
      }

      dispatch(createProjectAction(newProject));
    }

    return <Group>
    {props && <FormLayout>
      <FormItem
        top="E-mail" 
        status={name ? 'valid' : 'error'}
        bottom={name ? '' : 'Проект обязательно нужно как-то назвать!'}
      >
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        />
      </FormItem>
      <FormItem>
    <Button size="l" stretched onClick={onCreateProjectClick}><>{isFetching && <span><Spinner size="small" style={{ margin: '0 20px' }} /></span>}{props?.project?._id ? "Обновить" : "Создать"}</></Button>
      </FormItem>
    </FormLayout>
    }
  </Group>;
}

export default EditProjectComponent;