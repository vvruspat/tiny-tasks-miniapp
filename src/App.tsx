import React, { useState, useEffect, useContext } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import { ScreenSpinner, Panel, ModalPage, ModalRoot, ModalPageHeader, withAdaptivity } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Project from "./panels/Project";
import EditStep from "./panels/EditStep";

import { StepType, TaskType, UserType } from "./types";
import { ProjectType } from "./types/project";
import { useDispatch } from "react-redux";
import { getProjectsAction } from "./actions/projectActions";
import EditProjectComponent from './components/EditProject/EditProject';
import EditTaskComponent from './components/EditTask/EditTask';
import EditStepComponent from './components/EditStep/EditStep';
import { ModalParamsType } from './types/modal';
import Icon28CancelOutline from '@vkontakte/icons/dist/28/cancel_outline';
import { BridgeConfigConext } from './context/BridgeConfig';

const WINDOW_WITH_MODAL_HEIGHT = 600;

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState<UserType>();
  const [popout, setPopout] = useState<React.ReactNode | null>(
    <ScreenSpinner />
  );
  const [activeModal, setActiveModal] = useState<ModalParamsType | null>(null);
  const [panelProps, setPanelProps] = useState({});
  const [currentWindowHeigh, setCurrentWindowHeight] = useState(window.innerHeight);
  const dispatch = useDispatch();
  const bridgeConfig = useContext(BridgeConfigConext);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");

      setUser(user);

      dispatch(getProjectsAction());
      setPopout(null);
    }
    fetchData();
  }, []);

  async function setModal(modalParams: ModalParamsType | null) {
    if (bridge.supports("VKWebAppResizeWindow")) {
        const viewHeight = (bridgeConfig?.viewport_height ?? WINDOW_WITH_MODAL_HEIGHT) - 120;

        if (modalParams) {
          await bridge.send("VKWebAppResizeWindow", {"width": window.innerWidth, "height": viewHeight});
        } else {
          await bridge.send("VKWebAppResizeWindow", {"width": window.innerWidth, "height": currentWindowHeigh});
        }

        if (window.innerHeight !== viewHeight && window.innerHeight !== WINDOW_WITH_MODAL_HEIGHT) {
          setCurrentWindowHeight(window.innerHeight);
        }
    }
    setTimeout(() => {
      setActiveModal(modalParams);
    }, modalParams ? 100 : 0);
  }

  const go = (to: string, props: any) => {
    setPanelProps(props);
    setActivePanel(to);
  };

  const getModalHeader = (text: string) => <ModalPageHeader right={<Icon28CancelOutline onClick={() => setModal(null)} />}>{text}</ModalPageHeader>;

  const modal = (
    <ModalRoot activeModal={activeModal?.id ?? null}>
      <ModalPage id="editProject" header={getModalHeader("Настройки проекта")} settlingHeight={75} dynamicContentHeight={true}>
        <EditProjectComponent onClose={() => setModal(null)} project={activeModal?.id === "editProject" ? activeModal?.props : null} />
      </ModalPage>
      <ModalPage id="editTask" header={getModalHeader("Настройки задачи")} settlingHeight={15}>
        <EditTaskComponent task={activeModal?.id === "editTask" ? activeModal?.props : null}  />
      </ModalPage>
      <ModalPage id="editStep" header={getModalHeader("Настройки подзадачи")} settlingHeight={15}>
        <EditStepComponent step={activeModal?.id === "editStep" ? activeModal?.props : null}  />
      </ModalPage>
    </ModalRoot>
  )

  return (
    <View activePanel={activePanel} modal={modal} popout={popout}>
      <Panel id="home">
        <Home 
          go={go} 
          setPopout={setPopout} 
          setModal={setModal} 
        />
      </Panel>
      <Panel id="project">
        <Project
          go={go}
          setPopout={setPopout}
          setModal={setModal}
          {...(panelProps as ProjectType)}
        />
      </Panel>
      <Panel id="editStep">
        <EditStep 
          go={go} 
          setPopout={setPopout}
          setModal={setModal} 
          {...(panelProps as StepType)} 
        />
      </Panel>
    </View>
  );
};

export default withAdaptivity(App, {
    sizeX: true,
    sizeY: true,
    viewWidth: true,
    viewHeight: true,
});
