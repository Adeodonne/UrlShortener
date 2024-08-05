import { makeAutoObservable } from "mobx";
import {LinkShortInfo} from "../../Pages/LinksPage/LinksPage";

interface IPopUp{
    isOpen : boolean,
}
interface DeletePopUpInterface extends IPopUp{
    urlId : string
}

interface CreatePopUpInterface extends IPopUp{
}

interface UrlDetailsPopUpInterface extends IPopUp{
    linkShortInfo : LinkShortInfo | null
}

class DeletePopUpStorage {
    deletePopUp: DeletePopUpInterface = {
        isOpen : false,
        urlId : ""
    };

    createPopUp: CreatePopUpInterface = {
        isOpen : false
    };

    urlDetailsPopUp: UrlDetailsPopUpInterface = {
        isOpen : false,
        linkShortInfo : null
    };

    constructor() {
        makeAutoObservable(this);
    }

    showDeletePopUp = (urlId : string) => {
        this.closeCreatePopUp();
        this.closeUrlDetailsPopUp();

        this.deletePopUp.isOpen = true;
        this.deletePopUp.urlId = urlId;
    }

    closeDeletePopUp = () => {
        this.deletePopUp.isOpen = false;
        this.deletePopUp.urlId = '';
    }

    get isDeletePopUpOpen(){
        return this.deletePopUp.isOpen;
    }

    get getDeletedUrlId() {
        return this.deletePopUp.urlId;
    }

    showCreatePopUp = () => {
        this.closeDeletePopUp();
        this.closeCreatePopUp();

        this.createPopUp.isOpen = true;
    }

    closeCreatePopUp = () => {
        this.createPopUp.isOpen = false;
    }

    get isCreatePopUpOpen() {
        return this.createPopUp.isOpen
    }

    showUrlDetailsPopUp = (linkShortInfo : LinkShortInfo) => {
        this.closeCreatePopUp()
        this.closeDeletePopUp()

        this.urlDetailsPopUp.isOpen = true
        this.urlDetailsPopUp.linkShortInfo = linkShortInfo
    }

    closeUrlDetailsPopUp = () => {
        this.urlDetailsPopUp.isOpen = false;
        this.urlDetailsPopUp.linkShortInfo = null;
    }

    get isUrlDetailsPopUpOpen(){
        return this.urlDetailsPopUp.isOpen;
    }

    get getUrlDetails() {
        return this.urlDetailsPopUp.linkShortInfo;
    }
}

export const PopUpsStorage = new DeletePopUpStorage();
