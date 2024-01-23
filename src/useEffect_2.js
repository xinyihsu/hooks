import React, { useEffect, useState } from "react";

function App() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    function HandleResize() {
        setwindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", HandleResize);
    }, [])
    
    return (
        <div>{windowWidth}</div>
    );
}

export default App;