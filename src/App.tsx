import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import { ScreenSpinner, Panel } from "@vkontakte/vkui";
// import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Project from "./panels/Project";
import EditStep from "./panels/EditStep";

import { StepType, UserType } from "./types";
import { ProjectType } from "./types/project";
import { useDispatch } from "react-redux";
import { getProjectsAction } from "./actions/projectActions";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState<UserType>();
  const [popout, setPopout] = useState<React.ReactNode | null>(
    <ScreenSpinner />
  );
  const [panelProps, setPanelProps] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");

      setUser(user);

      dispatch(getProjectsAction());
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (to: string, props: any) => {
    console.log("go", to, props);
    setPanelProps(props);
    setActivePanel(to);
  };

  console.log("active", activePanel);

  return (
    <View activePanel={activePanel} popout={popout}>
      <Panel id="home">
        <Home go={go} setPopout={setPopout} />
      </Panel>
      <Panel id="project">
        <Project
          go={go}
          setPopout={setPopout}
          {...(panelProps as ProjectType)}
        />
      </Panel>
      <Panel id="editStep">
        <EditStep go={go} setPopout={setPopout} {...(panelProps as StepType)} />
      </Panel>
    </View>
  );
};

export default App;
