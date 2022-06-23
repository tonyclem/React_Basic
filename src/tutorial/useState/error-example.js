import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "hello world!";
    console.log("hello King");
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
