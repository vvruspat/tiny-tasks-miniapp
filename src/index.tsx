import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./reducers/configureStore";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import './constants/config';
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
