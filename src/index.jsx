import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";

import "./styles.css";

function App() {
  return <Homepage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
