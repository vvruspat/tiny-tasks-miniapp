import {
  Group,
  FormLayout,
  FormItem,
  Input,
  Button,
  Spinner,
} from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProjectAction, updateProjectAction } from "../../redux/projects/actions";
import { StateType } from "../../redux/configureStore";
import { ProjectType } from "../../types/project";

type EditProjectProps = { 
  onClose: () => void; 
  _id: string | null;
};

const EditProjectComponent: FC<EditProjectProps> = (
  props: EditProjectProps
) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const project = useSelector((state: StateType) => state.projects.projects.find(proj => proj._id === props._id));
  const [name, setName] = useState(project?.name ?? "Новый проект");
  const error = useSelector((state: StateType) => state.projects.error);
  const isFetching = useSelector(
    (state: StateType) => state.projects.isFetching
  );

  useEffect(() => {
    if (!isFetching && !error && isLoading) {
      props.onClose();
    }
  }, [isFetching, error, isLoading]);

  const onCreateProjectClick = () => {
    const newProject: ProjectType = {
      ...(project ?? {
        tasks: [],
      }),
      name: name,
    };

    if (newProject._id) {
      dispatch(updateProjectAction(newProject));
    } else {
      dispatch(createProjectAction(newProject));
    }
    setLoading(true);
  };

  return (
    <Group>
      {props && (
        <FormLayout>
          <FormItem
            top="E-mail"
            status={name ? "valid" : "error"}
            bottom={name ? "" : "Проект обязательно нужно как-то назвать!"}
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
            <Button size="l" stretched onClick={onCreateProjectClick}>
              <>
                {isFetching && (
                  <span>
                    <Spinner size="small" style={{ margin: "0 20px" }} />
                  </span>
                )}
                {project?._id ? "Обновить" : "Создать"}
              </>
            </Button>
          </FormItem>
        </FormLayout>
      )}
    </Group>
  );
};

export default EditProjectComponent;
