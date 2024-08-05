import {AuthorizationConstants} from "./AuthorizationConstants";

export interface ValidationSignUp {
    isLoginValid : boolean,
    loginErrorMessage : string,
    isPasswordValid : boolean,
    passwordErrorMessage : string,
}

export class AuthorizationFormValidation {

    static ValidateSignUp(login : string, password : string) : ValidationSignUp {
        let isLoginValid: boolean = true;
        let loginErrorMessage : string = '';

        let isPasswordValid : boolean = true;
        let passwordErrorMessage : string = '';

        if (login.length < AuthorizationConstants.LOGIN_MIN_LENGTH || login.length > AuthorizationConstants.LOGIN_MAX_LENGTH) {
            isLoginValid = false;
            loginErrorMessage = `Login must be between ${AuthorizationConstants.LOGIN_MIN_LENGTH} and ${AuthorizationConstants.LOGIN_MAX_LENGTH} characters.`;
        }

        if (password.length < AuthorizationConstants.LOGIN_MIN_LENGTH || password.length > AuthorizationConstants.PASSWORD_MAX_LENGTH) {
            isPasswordValid = false;
            passwordErrorMessage = `Password must be between ${AuthorizationConstants.PASSWORD_MIN_LENGTH} and ${AuthorizationConstants.PASSWORD_MAX_LENGTH} characters.`;
        }

        return {
            isLoginValid: isLoginValid,
            loginErrorMessage: loginErrorMessage,
            isPasswordValid: isPasswordValid,
            passwordErrorMessage: passwordErrorMessage
        };
    }
}