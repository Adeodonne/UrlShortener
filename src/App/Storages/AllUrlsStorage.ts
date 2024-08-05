import { makeAutoObservable } from "mobx";
import {LinkShortInfo} from "../../Pages/LinksPage/LinksPage";
import {UrlApi} from "../Api/UrlApi";

class AllUrlsStorage {
    public allUrls: LinkShortInfo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async updateAllUrls() {
        this.allUrls = (await UrlApi.getAllUrls());
    }

    get getAllUrls() {
        return this.allUrls;
    }
}

export const allUrlsStorage = new AllUrlsStorage();
