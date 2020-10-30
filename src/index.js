// React Imports
import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import "./index.css";

// Background Image Information
const BackgroundImagePage = () => {
  return <div className="bg"></div>;
};

// Background Export Information
export default BackgroundImagePage;

// React Render App Information
ReactDOM.render(<App />, document.getElementById("root"));
