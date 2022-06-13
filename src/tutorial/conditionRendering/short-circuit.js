import React from "react";

const ShortCircuit = () => {
  const [text, setText] = React.useState("");
  //   const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value :{secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
