import React, { useState, useEffect } from "react";

// cleanup function
// second argument
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // this the Declare function of the check size
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");

    // Declaring, a Eventlistener, and assign it to checKSize
    window.addEventListener("resize", checkSize);

    // this function this to remove the checkSize once will done
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  console.log("render");

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
