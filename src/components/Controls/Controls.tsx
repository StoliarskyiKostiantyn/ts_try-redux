import { useSelector, useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const step = useSelector(
    (state: { counter: { step: number } }) => state.counter.step
  );
  return (
    <div className="Counter__controls">
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: step })}
      >
        Увеличить на {step}
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: step })}
      >
        Уменьшить на {step}
      </button>
    </div>
  );
};
export default Controls;
