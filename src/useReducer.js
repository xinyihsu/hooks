import React, { useReducer, useState } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}
function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    //const [count, setCount] = useState(0);

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT });
        //setCount(pre => pre + 1);
    }
    
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT });
        //setCount(pre => pre - 1);
    }

    return (
        <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
        </>
    );
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default App;