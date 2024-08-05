import React, { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';
import { AuthorizationFormValidation, ValidationSignUp } from "./helpers/AuthorizationValidation";
import { UserApi } from "../../App/Api/UserApi";
import { userStore } from "../../App/Storages/UserStorage";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';

function LoginPage() {
    const navigate = useNavigate();
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async () => {
        const userResponse = await UserApi.loginUser(login, password);
        if (userResponse !== undefined) {
            localStorage.setItem("authToken", userResponse.data.token);
            userStore.setUser(userResponse.data);
            navigate('/links');
        } else {
            alert("Wrong login or password");
        }
    };

    const handleSignUp = async () => {
        let validationResult: ValidationSignUp = AuthorizationFormValidation.ValidateSignUp(login, password);

        if (!validationResult.isLoginValid) setLoginError(validationResult.loginErrorMessage);
        if (!validationResult.isPasswordValid) setPasswordError(validationResult.passwordErrorMessage);

        if (validationResult.isLoginValid && validationResult.isPasswordValid) {
            const userResponse = await UserApi.createUser(login, password);
            if (userResponse === undefined) alert("Something went wrong. Try again");
            else {
                alert("User was created. Login now");
                setIsLoginForm(true);
                setLogin("");
                setPassword("");
            }
        }
    };

    const handleSwitchToAnotherForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <div className="form-header">
                    {isLoginForm ? 'Login' : 'Sign up'}
                </div>
                <div className="inputs">
                <div className="input-field">
                    <Input
                        placeholder='Login'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        error={!!loginError}
                    />
                    {loginError && <Typography className="error-message">{loginError}</Typography>}
                </div>
                <div className="input-field">
                    <Input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!passwordError}
                    />
                    {passwordError && <Typography className="error-message">{passwordError}</Typography>}
                </div>
                </div>
                <div className="button-container">
                    {isLoginForm ? (
                        <Button onClick={handleLogin}>Login</Button>
                    ) : (
                        <Button onClick={handleSignUp}>Sign up</Button>
                    )}
                    <Button className="switch-button" onClick={handleSwitchToAnotherForm}>
                        Switch to {isLoginForm ? 'Sign up' : 'Login'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
