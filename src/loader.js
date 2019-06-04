import React from "react";
const loader = () => {
  return (
    <div className="ui active transition visible dimmer">
      <div className="content">
        <div className="ui text loader">Loading</div>
      </div>
    </div>
  );
};
export default loader;
