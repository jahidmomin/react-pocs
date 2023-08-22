import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
//   alert(JSON.stringify(action));
  switch (action.type) {
    case "increment":
    //   alert(JSON.stringify(state.count));
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state.count}</h2>
      <hr></hr>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}
