import React, { MouseEventHandler } from "react";

type Props = {
  step: number;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
  onDecrement: MouseEventHandler<HTMLButtonElement>;
};

const Controls = ({ step, onIncrement, onDecrement }: Props) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на {step}
      </button>
    </div>
  );
};
export default Controls;
