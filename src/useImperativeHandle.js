import React, { useRef, useState, useImperativeHandle } from "react";

export default function App() {
    const [value, setValue] = useState('red');
    const inputRef = useRef();

    return (
        <>
        <CustomInput ref={inputRef} value={value}
            onChange={e => setValue(e.target.value)} />
        <button onClick={() => inputRef.current.alertHi()}>Focus</button>
        </>
    )
}

const CustomInput = React.forwardRef(({style, ...props}, ref) => {
    useImperativeHandle(ref, () => {
        return {alertHi: () => alert("hi")}
    }, []);

    return (
        <input
            {...props}
            style={{
                border: "none",
                backgroundColor: "lightpink",
                padding: ".25em",
                borderBottom: ".1em solid black",
                borderTopRightRadius: ".25em",
                borderTopLeftRadius: ".25em",
                ...style,
            }} />
    );
});