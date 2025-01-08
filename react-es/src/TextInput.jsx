import { useState } from "react";

const TextInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);

        console.log(inputValue);
    };

    return(
        <div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Nome" />
        </div>
    );
};

export default TextInput;