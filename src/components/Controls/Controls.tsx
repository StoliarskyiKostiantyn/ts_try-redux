import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/reducer";
const Controls = () => {
  const dispatch = useDispatch();
  const step = useSelector(
    (state: { counter: { step: number } }) => state.counter.step
  );
  const onAdd = () => {
    dispatch(increment());
  };
  const onDelete = () => {
    dispatch(decrement());
  };
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onAdd}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={onDelete}>
        Уменьшить на {step}
      </button>
    </div>
  );
};
export default Controls;
