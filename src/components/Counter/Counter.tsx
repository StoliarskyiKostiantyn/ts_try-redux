import Controls from "../Controls/Controls";
import Value from "../Value/Value";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
type Props = {
  value: number;
  step: number;
  onIncrement: any;
  onDecrement: any;
};
function Counter({ value, step, onIncrement, onDecrement }: Props) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}
const mapStateToProps = (state: {
  counter: { value: number; step: number };
}) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { payload: number; type: "increment" | "decrement" }) => any
) => {
  return {
    onIncrement: (value: number) => dispatch(actions.increment(value)),
    onDecrement: (value: number) => dispatch(actions.decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
