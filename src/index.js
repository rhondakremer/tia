import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from "./App";
import "./index.css";

const BackgroundImagePage = () => {
    return (
        <div className="bg"></div>
    );
  }
  
  export default BackgroundImagePage;

ReactDOM.render(<App />, document.getElementById("root"));
