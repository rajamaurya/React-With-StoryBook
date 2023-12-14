import React, { useState } from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
const Counter = ({ label, type, color }) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          padding: "10px",
        }}
      >
        <Button onClick={increaseCounter} label="+" type="primary">
          +
        </Button>
        <span style={{ padding: "10px" }}>Count :: {counter}</span>
        <Button onClick={decreaseCounter} label="-" type="secondary">
          -
        </Button>
      </div>
    </>
  );
};

Counter.propTypes = {
  color: PropTypes.string,
};
export default Counter;
