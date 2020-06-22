import React from "react";

import Style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Style.container}>
      <div className={`${Style.item} ${Style.yellow}`}></div>
      <div className={`${Style.item} ${Style.red}`}></div>
      <div className={`${Style.item} ${Style.blue}`}></div>
      <div className={`${Style.item} ${Style.violet}`}></div>
    </div>
  );
};

export default Loader;
