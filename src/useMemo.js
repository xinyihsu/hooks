import React, { useEffect, useMemo, useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        };
    }, [dark])

    useEffect(() => {
        console.log('theme changed');
    }, [theme]);

    return (
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(pre => !pre)}>change theme</button>
        <div style={theme}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num) {
    console.log('calling slow function');
    for (let i = 0; i < 1000000000; i++) {}
    return (num * 2);
}

export default App;