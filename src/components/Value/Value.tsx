import React from "react";

type Props = {
  value: number;
};

const Value = ({ value }: Props) => {
  return <span className="Counter__value">{value}</span>;
};
export default Value;
