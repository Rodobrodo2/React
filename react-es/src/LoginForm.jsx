import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input type="text" value={username} onInput={handleUsername} placeholder="Inserisci il tuo username" />
                <input type="password" value={password} onInput={handlePassword} placeholder="Inserisci la tua password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;