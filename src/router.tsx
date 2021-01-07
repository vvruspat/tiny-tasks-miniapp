import { createNavigator } from "@vkontakte/router";

const routes = [
  {
    name: "projects",
    updateUrl: false,
    children: [
      // Modals
      { name: "project/edit", modal: true, updateUrl: false },
      { name: "project/delete", modal: true, updateUrl: false },
      // Pages
      { name: "project", updateUrl: false },
      {
        name: "project/task",
        updateUrl: false,
        children: [
          // Modals
          { name: "project/task/edit", modal: true, updateUrl: false },
          { name: "project/task/delete", modal: true, updateUrl: false },
        ],
      },
      {
        name: "project/task/step",
        updateUrl: false,
        children: [
          // Modals
          { name: "project/task/step/edit", modal: true, updateUrl: false },
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
