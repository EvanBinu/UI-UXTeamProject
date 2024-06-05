import React, { useState, useEffect } from 'react';
import './containerCSS.css'; // Import the CSS file for container styling
import './style.css'; // Import the CSS file for general styling

const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            container.classList.add("active");
        };

        const handleLoginClick = () => {
            container.classList.remove("active");
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="containerback">
            <div className="left">
                <div className="container" id="container">
                    <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                        <form>
                            {isSignUp ? (
                                <h1>Create Account</h1>
                            ) : (
                                <h1>Sign In</h1>
                            )}

                            <span>{isSignUp ? 'or use your email for registration' : 'or use your email password'}</span>
                            {isSignUp && <input type="text" placeholder="Name" />}
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="hidden type1 type2"></button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="hidden type1" onClick={toggleForm} id="login"></button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="hidden type1 type2" onClick={toggleForm} id="register"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
