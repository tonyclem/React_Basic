import React, { useState } from "react";

export const UseStateBasic = () => {
  const [text, setText] = useState("Code 101");
  const handleClick = () => {
    if (text === "Code 101") {
      setText("hello world is Code 200! Ok");
    } else {
      setText("random Code 501");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};
