import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as userService from "../services/authServices";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    function onSubmitHandler(e) {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));

        userService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/Home');
            })
    }

    return (
        // < !--Login Page(Only for Guest users ) -->
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}