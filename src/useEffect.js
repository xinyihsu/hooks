import React, { useEffect, useState } from "react";

function App() {
    const [resource, setResource] = useState("posts");
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resource]);

    return (
        <>
        <div>
            <button onClick={() => setResource("posts")}>Posts</button>
            <button onClick={() => setResource("users")}>Users</button>
            <button onClick={() => setResource("comments")}>Comments</button>
        </div>
        <h1>{resource}</h1>
        {items.map(item => (
            <pre>{JSON.stringify(item)}</pre>
        ))}
        </>
    );
}

export default App;