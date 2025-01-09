import React, { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef();

    const handleShowValue = () => {
        alert(`Valore dell'input: ${inputRef.current.value}`);
    };

    return (
        <div>
            <h2>Uncontrolled Input</h2>
            <input type="text" ref={inputRef} placeholder="Scrivi"/>
            <button onClick={handleShowValue}>Mostra valore</button>
        </div>
    );
};

export default UncontrolledInput;