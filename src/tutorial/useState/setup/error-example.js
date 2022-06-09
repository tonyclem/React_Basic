import React from "react";

export const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello ";
    console.log("hello King");
  };
  return (
    <React.Fragment>
      <h1>useState error</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};
