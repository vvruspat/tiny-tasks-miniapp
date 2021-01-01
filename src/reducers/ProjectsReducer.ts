import { ProjectType } from "../types/project";
import { EVENTS } from "../constants/events";

export const projectsInitialState: ProjectType[] = [
  {
    _id: "7567576-86755576-jghf67",
    name: "Клипы",
    tasks: [
      {
        name: "477 Video",
        steps: [
          {
            id: "hfgfgh",
            name: "Съёмки в пустыне",
            owner: 5654665,
            status: 2,
            comments: [
              {
                owner: 2345234,
                date: 23454235,
                text: "Надо взять с собой теплую одежду",
              },
            ],
          },
          { id: "hfgfg6h", name: "Съёмки в горах", owner: 5654665, status: 2 },
          {
            id: "hfgfgh90",
            name: "Съёмки трэка",
            owner: 5654665,
            status: 0,
            comments: [
              {
                owner: 2345234,
                date: 23454235,
                text: "Надо взять с собой теплую одежду",
              },
              {
                owner: 2345234,
                date: 23454235,
                text: "Нужно шесть бимов",
              },
            ],
          },
          {
            id: "hfgffdghjgh",
            name: "Монтаж",
            owner: 5654665,
            status: 0,
          },
          {
            id: "6547tyghhfgfgh",
            name: "Графоний",
            owner: 5654665,
            status: 0,
            comments: [
              {
                owner: 2345234,
                date: 23454235,
                text: "Надо взять с собой теплую одежду",
              },
              {
                owner: 2345234,
                date: 23454235,
                text: "Нужно шесть бимов",
              },
              {
                owner: 2345234,
                date: 23454235,
                text: "Нужно шесть бимов",
              },
              {
                owner: 2345234,
                date: 23454235,
                text: "Нужно шесть бимов",
              },
              {
                owner: 2345234,
                date: 23454235,
                text: "Нужно шесть бимов",
              },
            ],
          },
          {
            id: "hfglkji7fgh",
            name: "Цветкор",
            owner: 5654665,
            status: 0,
          },
        ],
      },

      {
        name: "Rassvet Video",
        steps: [
          {
            id: "hf5tghgfgh",
            name: "Съёмки в лесу",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgfg7yuhh",
            name: "Съёмки с волками",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgf7yuhgh",
            name: "Съёмки трэка",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgjkhgyu7fgh",
            name: "Съёмки Жертва летом",
            owner: 5654665,
            status: 2,
          },
          {
            id: "h53e4trytfgfgh",
            name: "Съёмки Жертва осенью",
            owner: 5654665,
            status: 0,
          },
          {
            id: "56utyhfgfgh",
            name: "Съёмки Жертва зимой",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgjhgut6t7tfgh",
            name: "Монтаж",
            owner: 5654665,
            status: 1,
          },
          {
            id: "hfg098uhjfgh",
            name: "Графоний",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfg6ttygjhvfgh",
            name: "Цветкор",
            owner: 5654665,
            status: 1,
          },
        ],
      },

      {
        name: "SpaceX Video",
        steps: [
          {
            id: "hfgfe45r6tyghgh",
            name: "Кристаллы",
            owner: 5654665,
            status: 1,
          },
          {
            id: "hfgfkoi98uy7ghjgh",
            name: "Шлем",
            owner: 5654665,
            status: 1,
          },
          {
            id: "hfgfgr5yt6uygh",
            name: "Костюм",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgf2qw3erdfgh",
            name: "Съёмки в лесу",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hf5r6t7yuhjgfgh",
            name: "Съёмки на космическом корале",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgfgyfr6t7y8uh",
            name: "Монтаж",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgkmi9876tgyhfgh",
            name: "Графоний",
            owner: 5654665,
            status: 0,
          },
          {
            id: "4e5r6ty7uijhfgfgh",
            name: "Цветкор",
            owner: 5654665,
            status: 0,
          },
        ],
      },
    ],
  },

  {
    _id: "7567576-65njh755576-jghf67",
    name: "Альбом Engine of the World",
    tasks: [
      {
        name: "Antillia 3",
        steps: [
          {
            id: "hfhgd4e577iuhgfgh",
            name: "Партия барабанов",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgfgh45r6tyh",
            name: "Партия Баса",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgfgh45r6tyuhjn",
            name: "Партия Гитары",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgfdgter56t7yiuhgh",
            name: "Партия Соло",
            owner: 5654665,
            status: 0,
          },
          {
            id: "5r6ty7iuhjhfgfgh",
            name: "Вокальная мелодя",
            owner: 5654665,
            status: 0,
          },
          {
            id: "e45rtu6gyhkujhfgfgh",
            name: "Текст RUS",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hhdry5tu6y7iuhkfgfgh",
            name: "Текст ENG",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hasedgrhfgjhiu6ry5fgfgh",
            name: "Запись барабанов",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgi87ytuhfgh",
            name: "Запись Баса",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgfghhjft67y8uijk",
            name: "Запись Гитары",
            owner: 5654665,
            status: 0,
          },
          {
            id: "gftr6yg678uhfgfgh",
            name: "Запись Соло",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgfghgtrt56t7y8uijkh",
            name: "Запись вокала Eng",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgfjhgfr567yuhijkbhgh",
            name: "Запись вокала Rus",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hgtfr56t7yu8hfgfgh",
            name: "Оркестр",
            owner: 5654665,
            status: 0,
          },
          {
            id: "gfde56t7yuhijklkjhfgfgh",
            name: "Сведение инструментала",
            owner: 5654665,
            status: 0,
          },
          {
            id: "gft67yuhjhfgfgh",
            name: "Сведение RUS",
            owner: 5654665,
            status: 0,
          },
          {
            id: "hfgfghhgytfyui7y",
            name: "Сведение ENG",
            owner: 5654665,
            status: 0,
          },
        ],
      },
      {
        name: "Пульс",
        steps: [
          {
            id: "h354rfgsrfgfgfgh",
            name: "Партия барабанов",
            owner: 5654665,
            status: 2,
          },
          {
            id: "3245rtyghffhfgfgh",
            name: "Партия Баса",
            owner: 5654665,
            status: 2,
          },
          {
            id: "kjwireu",
            name: "Партия Гитары",
            owner: 5654665,
            status: 0,
          },
          {
            id: "345rgregerhfgfgh",
            name: "Партия Соло",
            owner: 5654665,
            status: 2,
          },
          {
            id: "324rewwerfgfgh",
            name: "Вокальная мелодя",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hjlisahiufy7asydufgh",
            name: "Текст RUS",
            owner: 5654665,
            status: 2,
          },
          {
            id: "234fewrwergfgh",
            name: "Текст ENG",
            owner: 5654665,
            status: 2,
          },
          {
            id: "324rfrwrewetfgh",
            name: "Запись барабанов",
            owner: 5654665,
            status: 2,
          },
          {
            id: "34r3rewrwertgh",
            name: "Запись Баса",
            owner: 5654665,
            status: 2,
          },
          {
            id: "324r234rwefdrgwergfgh",
            name: "Запись Гитары",
            owner: 5654665,
            status: 2,
          },
          {
            id: "h234srrwtregfgh",
            name: "Запись Соло",
            owner: 5654665,
            status: 2,
          },
          {
            id: "rewfw434",
            name: "Запись вокала Eng",
            owner: 5654665,
            status: 0,
          },
          {
            id: "jkhefsf8hsf",
            name: "Запись вокала Rus",
            owner: 5654665,
            status: 2,
          },
          {
            id: "34gtrdfgwdsfg",
            name: "Аранжировка",
            owner: 5654665,
            status: 2,
          },
          {
            id: "hfgfwerewrewrgh",
            name: "Сведение инструментала",
            owner: 5654665,
            status: 0,
          },
          {
            id: "h234verwerfgfgh",
            name: "Сведение RUS",
            owner: 5654665,
            status: 0,
          },
          {
            id: "h34w45gw5ergrwfgfgh",
            name: "Сведение ENG",
            owner: 5654665,
            status: 0,
          },
        ],
      },
    ],
  },
];

// TODO: fix any
export default function ProjectsReducer(
  state: ProjectType[] = projectsInitialState,
  action: any
) {
  switch (action.type) {
    case EVENTS.GET_PROJECTS_SUCCESS: {
      console.log("state", action.payload);
      state = action.payload as ProjectType[];

      return state;
    }

    case EVENTS.CREATE_PROJECT_SUCCESS: {
      state.push(action.payload as ProjectType);

      return state;
    }

    case EVENTS.DELETE_PROJECT_SUCCESS: {
      const project = action.payload;

      state = state?.filter((_project) => !(project.id === _project._id)) ?? [];

      return state;
    }

    default:
      return state;
  }
}
