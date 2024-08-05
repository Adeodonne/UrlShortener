import axios from "axios";
import {ConnectionConstant} from "./ConnectionConstant";

export class UrlApi {
    static urlHeader : string = ConnectionConstant + "/Url"

    static createUrl = async (fullUrl : string) => {
        try {
            const response = await axios.post(
                this.urlHeader + '/create',
                {
                    fullUrl: fullUrl
                },
                {
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + localStorage.getItem("authToken")
                    }
                }
            );
            return response.data
        } catch (error) {
            console.error('Error:', error);
        }
    };

    static deleteUrl = async (id : string) => {
        try {
            const response = await axios.delete(
                this.urlHeader + '/' + id,
                {
                    headers: {
                        'Accept': '*/*',
                        'Authorization': "Bearer " + localStorage.getItem("authToken")
                    }
                }
            );
            return response.data
        } catch (error) {
            console.error('Error:', error);
        }
    };

    static getAllUrls = async () => {
        try {
            const response = await axios.get(
                this.urlHeader + '/all',
                {
                    headers: {
                        'Accept': '*/*'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    static getUrlDetails = async (id : string) => {
        try {
            const response = await axios.get(
                this.urlHeader + `/getDetails/${id}`,
                {
                    headers: {
                        'Accept': '*/*'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    static getFullUrl = async (shortUrl : string) => {
        try {
            const response = await axios.get(
                this.urlHeader + `/getFullUrl/${shortUrl}`,
                {
                    headers: {
                        'Accept': '*/*'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    };
}