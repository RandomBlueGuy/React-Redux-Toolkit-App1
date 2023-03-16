import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT, MULTIPLY, DIVIDE, RESET } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(1);
  const SubmittedValue = Number(inputValue) || 2;
  return (
    <section className="counter-zone">
      <h1>{count}</h1>
      <input
        type="text"
        className="input"
        value={SubmittedValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className="button-group">
        <button onClick={() => dispatch(INCREMENT(SubmittedValue))}>+</button>
        <button onClick={() => dispatch(DECREMENT(SubmittedValue))}>-</button>
        <button onClick={() => dispatch(MULTIPLY(SubmittedValue))}>*</button>
        <button onClick={() => dispatch(DIVIDE(SubmittedValue))}>/</button>
        <button
          onClick={() => {
            dispatch(RESET(SubmittedValue));
          }}
        >
          R
        </button>
      </div>
      <p className=""> *hay problemas en la comprobación numérica del input*</p>
    </section>
  );
};

export default Counter;
