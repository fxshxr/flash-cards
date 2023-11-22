import React, { useState } from "react";

const CardComponent = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="card">
        {!visible && <p>{props.question}</p>}
        {visible && <p>{props.answer}</p>}

        <br></br>

        <button onClick={() => setVisible(!visible)}>
          {!visible ? "Show answer" : "Hide answer"}
        </button>
      </div>
    </>
  );
};

export default CardComponent;
