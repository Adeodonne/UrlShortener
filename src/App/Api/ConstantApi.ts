import axios from "axios";
import {ConnectionConstant} from "./ConnectionConstant";

export class ConstantApi {
    static constantHeader : string = ConnectionConstant + "/Constants"
    static getConstantByName = async (name : string) => {
        return axios.get(this.constantHeader + "/" + name)
    }

    static editConstant = async (name : string, newValue : string) => {
        axios.put(this.constantHeader +"?name=" + name, newValue, {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('authToken')}`,
                'Content-Type' : 'application/json'}})
            .then(response => {return response});
    }
}