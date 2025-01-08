import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const h1Element = document.getElementById("count-heading");
        if (h1Element) {
            h1Element.innerText = `Count: ${count}`;
        }
        
    }, [count]); 

    return (
        <div>
            <h1 id="count-heading">Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;