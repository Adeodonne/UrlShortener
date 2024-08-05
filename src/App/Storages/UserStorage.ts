import { makeAutoObservable } from "mobx";
import User from "../../Models/User";

class UserStore {
    public user: User | null = {id: '', isAdmin: false, login: '', token: ""};

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: User) {
        this.user = user;
    }

    get isAdmin() {
        return this.user?.isAdmin;
    }

    get getId(){
        return this.user?.id;
    }
}

export const userStore = new UserStore();
