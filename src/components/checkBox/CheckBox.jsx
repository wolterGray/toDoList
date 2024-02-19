import React from "react";

function CheckBox({checkStatus, setCheckStatus}) {
  return (
    <span
      onClick={() => setCheckStatus(!checkStatus)}
      className={`checkbox ${checkStatus ? "checked" : ""}`}
    />
  );
}

export default CheckBox;
