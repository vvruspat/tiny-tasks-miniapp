import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import "./constants/config";
import App from "./App";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import BridgeConfig from "./context/BridgeConfig";

// Init VK  Mini App
bridge.send("VKWebAppInit");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider>
      <AdaptivityProvider>
        <BridgeConfig>
          <App />
        </BridgeConfig>
      </AdaptivityProvider>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
