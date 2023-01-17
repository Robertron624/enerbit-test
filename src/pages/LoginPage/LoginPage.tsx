import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!username || !password) {
            toast.error("Please enter an user and a password", {
                autoClose: 1500,
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        if (username !== "admin" || password !== "admin") {
            toast.error("Username or password are incorrect", {
                autoClose: 1500,
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        sessionStorage.setItem("user", username);
        sessionStorage.setItem("password", password);

        navigate("/dashboard");
    };

    const handleUsername = (e: any) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };

    return (
        <div className="form__container">
            <h2>Please login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="usename">Username</label>
                <input onChange={handleUsername} name="username" type="text" />
                <label htmlFor="password">Password</label>{" "}
                <input
                    onChange={handlePassword}
                    type="password"
                    name="password"
                    id="password"
                />
                <button className="submit__button" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
