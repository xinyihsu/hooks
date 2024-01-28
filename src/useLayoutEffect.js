import { useLayoutEffect, useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
        console.log('1');
    }, [count]);
    
    useLayoutEffect(() => {
        console.log(count);
        console.log('2');
    }, [count]);

    return (
        <>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <div>{count}</div>
        </>
    )
}

export default App;