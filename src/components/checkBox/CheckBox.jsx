import React from "react";

function CheckBox({checkStatus, onClick}) {
  return (
    <span
      onClick={onClick}
      className={`checkbox ${checkStatus ? "checked" : ""}`}
    />
  );
}

export default CheckBox;
