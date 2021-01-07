import { createNavigator } from "@vkontakte/router";

const routes = [
  {
    name: "projects",
    children: [
      // Modals
      { name: "project/edit", modal: true },
      { name: "project/delete", modal: true, updateUrl: false },
      // Pages
      { name: "project" },
      {
        name: "project/task",
        children: [
          // Modals
          { name: "project/task/edit", modal: true },
          { name: "project/task/delete", modal: true, updateUrl: false },
        ],
      },
      {
        name: "project/task/step",
        children: [
          // Modals
          { name: "project/task/step/edit", 
          modal: true },
          { name: "project/task/step/delete", modal: true, updateUrl: false },
        ],
      },
    ],
  },
];
const config = {
  defaultRoute: "projects",
  rootPage: "projects",
};

const router = createNavigator(routes, config);
router.start();

export default router;
