import React from "react";
import "./App.css";
import i18n from "./components/providers/i18Provider/i18n";
import Compose from "./components/common/Compose";
import RouterProvider from "./components/providers/RouterProvider/RouterProvider";

const providers = [i18n, RouterProvider];

function App() {
  return <Compose components={providers} />;
}

export default App;
