import React, { FC, useState } from "react";
import {
  Search,
  List,
  SimpleCell,
  ModalPage,
  ModalRoot,
  Avatar,
  ModalPageHeader,
} from "@vkontakte/vkui";
import { UserType } from "../../types";

const users: UserType[] = [
  {
    id: 23164852,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 5314852,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 23148502,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 23148252,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 2344852,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 2314882,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 2314851,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },

  {
    id: 2314856,
    first_name: "Ирина",
    last_name: "Денежкина",
    sex: 1,
    city: {
      id: 2,
      title: "Санкт-Петербург",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    bdate: "10.4.1990",
    photo_100:
      "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
    photo_200:
      "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
    timezone: 3,
  },
];

type UserSelectorModalType = {
  status?: number;
  onClose: () => void;
  onSelect: (user: UserType) => void;
};

const UserSelectorModal: FC<UserSelectorModalType> = (props) => {
  const [search, setSearch] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("search", event.target.value);
    setSearch(event.target.value);
  };

  return (
    <ModalRoot activeModal={"userSelector"}>
      <ModalPage
        id="userSelector"
        header={<ModalPageHeader>Пользователи сообщества</ModalPageHeader>}
        settlingHeight={80}
        dynamicContentHeight={true}
        onClose={() => props.onClose()}
      >
        <Search value={search} onChange={onChange} after={null} />
        {users.length > 0 && (
          <List>
            {users.map((user) => (
              <SimpleCell
                key={user.id}
                before={<Avatar src={user.photo_100} />}
                onClick={props.onSelect.bind(this, user)}
              >
                {user.first_name} {user.last_name}
              </SimpleCell>
            ))}
          </List>
        )}
      </ModalPage>
    </ModalRoot>
  );
};

export default UserSelectorModal;
