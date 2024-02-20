import React from "react";

function CheckBox({checkStatus}) {
  
  return (
    <span
      className={`checkbox ${checkStatus ? "checked" : ""}`}
    />
  );
}

export default CheckBox;
