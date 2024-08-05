import axios from "axios";
import {ConnectionConstant} from "./ConnectionConstant";

export class UserApi {
    static urlHeader : string = ConnectionConstant + "/Users"

    static createUser = async (login : string, password : string) => {
        try {
            const response = await axios.post(
                 this.urlHeader + '/create',
                {
                    login: login,
                    password: password
                },
                {
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    };

    static loginUser = async (login : string, password : string) => {
        try {
            const response = await axios.post(
                this.urlHeader + '/login',
                {
                    login: login,
                    password: password
                },
                {
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response;
        } catch (error) {
            console.error('Error:', error);
        }
    };
}