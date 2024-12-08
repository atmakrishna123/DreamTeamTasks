import React from "react";
import "./SignIn.css";
import {useRouter} from 'next/router';
function SignIn() {
    const router = useRouter();
    const redirectToHome = () => {
        router.push('/');
    };
    return (
        <div className="signInContainer">
            <div className="signInForm">
                <h2 className="signInTitle">SIGN IN</h2>
                <button className="closeButton">×</button>
                <form>
                    <label className="signInLabel" htmlFor="username">Username</label>
                    <input
                        className="signInInput"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                    />
                    <label className="signInLabel" htmlFor="password">Password</label>
                    <input
                        className="signInInput"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                    <div className="signInOptions">
                        <div className="rememberMe">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="forgotPassword">Forgot password?</a>
                    </div>
                    <button type="submit" className="signInButton" onClick={redirectToHome}>SIGN IN</button>
                </form>
            </div>
        </div>
    );
}
export default SignIn;
