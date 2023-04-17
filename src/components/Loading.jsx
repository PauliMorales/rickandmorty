import React from "react";
import "./styles/loading.css";
import load from "../assets/images/loader.png";

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading__img" src={load} alt="Loading..." />
    </div>
  );
};

export default Loading;
