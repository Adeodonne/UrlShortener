import React from 'react';
import { observer } from 'mobx-react-lite';
import { PopUpsStorage } from "../../../../App/Storages/PopUpsStorage";
import { UrlApi } from "../../../../App/Api/UrlApi";
import { allUrlsStorage } from "../../../../App/Storages/AllUrlsStorage";
import './DeletePopUp.scss';

const DeletePopUp = observer(() => {

    const handleDeleteUrl = async () => {
        await UrlApi.deleteUrl(PopUpsStorage.getDeletedUrlId);
        await allUrlsStorage.updateAllUrls()
        PopUpsStorage.closeDeletePopUp();
    }

    if (!PopUpsStorage.isDeletePopUpOpen) return null;

    return (
        <div className="delete-popup overlay">
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>Deleting url</h2>
                <p>Do you want to delete the url?</p>
                <button className="close-button" onClick={PopUpsStorage.closeDeletePopUp}>Close</button>
                <button className="delete-button" onClick={handleDeleteUrl}>Delete</button>
            </div>
        </div>
    );
});

export default DeletePopUp;
