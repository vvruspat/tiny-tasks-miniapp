import React, { useState, useEffect, useContext } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import {
  ScreenSpinner,
  Panel,
  ModalPage,
  ModalRoot,
  ModalPageHeader,
  withAdaptivity,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Project from "./panels/Project";
import { StepType, UserType } from "./types";
import { ProjectType } from "./types/project";
import { useDispatch } from "react-redux";
import { getProjectsAction } from "./redux/projects/actions";
import EditProjectComponent from "./components/EditProject/EditProject";
import EditTaskComponent from "./components/EditTask/EditTask";
import EditStepComponent from "./components/EditStep/EditStep";
import { ModalParamsType } from "./types/modal";
import Icon28CancelOutline from "@vkontakte/icons/dist/28/cancel_outline";
import { BridgeConfigConext } from "./context/BridgeConfig";
import router from "./router";
import { PopoutManageConext } from "./context/PopoutManage";

const WINDOW_WITH_MODAL_HEIGHT = 600;

const App = () => {
  const [routerState, setRouterState] = useState(router.getState());
  const [fetchedUser, setUser] = useState<UserType>();
  const [currentWindowHeigh, setCurrentWindowHeight] = useState(
    window.innerHeight
  );

  const dispatch = useDispatch();
  const bridgeConfig = useContext(BridgeConfigConext);
  const { popout, setPopout } = useContext(PopoutManageConext);

  const routerListener = ({ toState }: { toState: any }) => {
    setRouterState(toState);
    console.log("toState", toState);
  };

  useEffect(() => {
    const unsubscribe = router.subscribe(routerListener);

    return unsubscribe;
  }, []);

  useEffect(() => {
    setPopout(<ScreenSpinner />);
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");

      setUser(user);

      dispatch(getProjectsAction());
      setPopout(null);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (routerState.modal) {
      changeHeightForModal();
    } else {
      changeHeightForModal(true);
    }
  }, [routerState.modal]);

  useEffect(() => {
    if (popout) {
      changeHeightForModal();
    } else {
      changeHeightForModal(true);
    }
  }, [popout]);

  async function changeHeightForModal(isHide = false) {
    if (bridge.supports("VKWebAppResizeWindow")) {
      const viewHeight =
        (bridgeConfig?.viewport_height ?? WINDOW_WITH_MODAL_HEIGHT) - 120;

      if (!isHide) {
        await bridge.send("VKWebAppResizeWindow", {
          width: window.innerWidth,
          height: viewHeight,
        });
      } else {
        await bridge.send("VKWebAppResizeWindow", {
          width: window.innerWidth,
          height: currentWindowHeigh,
        });
      }

      if (
        window.innerHeight !== viewHeight &&
        window.innerHeight !== WINDOW_WITH_MODAL_HEIGHT
      ) {
        setCurrentWindowHeight(window.innerHeight);
      }
    }
  }

  const getModalHeader = (text: string) => (
    <ModalPageHeader
      right={<Icon28CancelOutline onClick={() => router.back()} />}
    >
      {text}
    </ModalPageHeader>
  );

  const modal = (
    <ModalRoot activeModal={routerState.modal}>
      <ModalPage
        id="project/edit"
        header={getModalHeader("Настройки проекта")}
        settlingHeight={75}
        dynamicContentHeight={true}
      >
        <EditProjectComponent
          onClose={() => router.back()}
          _id={routerState.params._id}
        />
      </ModalPage>
      {/* <ModalPage
        id="project/task/edit"
        header={getModalHeader("Настройки задачи")}
        settlingHeight={15}
      >
        <EditTaskComponent
          task={activeModal?.id === "editTask" ? activeModal?.props : null}
        />
      </ModalPage>
      <ModalPage
        id="project/task/step/edit"
        header={getModalHeader("Настройки подзадачи")}
        settlingHeight={15}
      >
        <EditStepComponent
          step={routerState.params ?? null}
        />
      </ModalPage> */}
    </ModalRoot>
  );

  return (
    <View activePanel={routerState.page} modal={modal} popout={popout}>
      <Panel id="projects">
        <Home />
      </Panel>
      <Panel id="project">
        <Project {...(routerState.params as ProjectType)} />
      </Panel>
      {/* <Panel id="editStep">
        <EditStep
          go={go}
          setPopout={setPopout}
          setModal={setModal}
          {...(panelProps as StepType)}
        />
      </Panel> */}
    </View>
  );
};

export default withAdaptivity(App, {
  sizeX: true,
  sizeY: true,
  viewWidth: true,
  viewHeight: true,
});
