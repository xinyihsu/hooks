import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
    const [show, setShow] = useState(false);
    const popupRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        if (popupRef.current == null || buttonRef.current == null) return;
        const {bottom} = buttonRef.current.getBoundingClientRect();
        popupRef.current.style.top = `${bottom + 25}px`
    }, [show]);

    return (
        <>
        <button ref={buttonRef} onClick={() => setShow(pre => !pre)}>Click</button>
        {show && (
            <div style={{position: "absolute"}} ref={popupRef}>
                This is a popup.
            </div>
        )}
        </>
    )
}

export default App;