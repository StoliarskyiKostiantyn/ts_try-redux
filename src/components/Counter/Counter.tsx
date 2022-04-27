import Controls from "../Controls/Controls";
import Value from "../Value/Value";
import { connect, useSelector } from "react-redux";

function Counter() {
  return (
    <div className="Counter">
      <Value />
      <Controls />
    </div>
  );
}

export default Counter;
