import React from "react";
import { useSelector } from "react-redux";

const Value = () => {
  const value = useSelector(
    (state: { counter: { value: any } }) => state.counter.value
  );
  return <span className="Counter__value">{value}</span>;
};
export default Value;
