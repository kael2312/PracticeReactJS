import React, { useState } from "react";
import PropTypes from "prop-types";

LoginForm.propTypes = {};

function LoginForm(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = e.target.elements
        setUserName(username.value)
        setPassword(password.value)
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button>Login</button>
            </form>
            <div>Username: {userName}</div>
            <div>Password: {password}</div>
        </div>
    );
}

export default LoginForm;
