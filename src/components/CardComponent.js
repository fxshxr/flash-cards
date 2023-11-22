import React, { useState } from "react";
const CardComponent = (props) => {
  return (
    <>
      <div className="card">
        {!props.visible && <p>{props.question}</p>}
        {props.visible && <p>{props.answer}</p>}

        <br></br>

        <button onClick={props.visibleFun}>
          {!props.visible ? "Show answer" : "Hide answer"}
        </button>
      </div>
    </>
  );
};

export default CardComponent;
