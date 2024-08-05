import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from "@mui/material";
import { PopUpsStorage } from "../../../../App/Storages/PopUpsStorage";
import { UrlApi } from "../../../../App/Api/UrlApi";
import { RedirectUrlServer } from "../../../../App/Api/RedirectUrlServer";
import { allUrlsStorage } from "../../../../App/Storages/AllUrlsStorage";
import './CreateUrlPopUp.scss';

const CreateUrlPopUp = observer(() => {
    const [url, setUrl] = useState('');

    const handleCreateUrl = async () => {
        const createdUrl = await UrlApi.createUrl(url);
        alert("Short link: " + RedirectUrlServer + "/" + createdUrl.shortUrl)
        setUrl('');
        await allUrlsStorage.updateAllUrls();
        PopUpsStorage.closeCreatePopUp();
    }

    if (!PopUpsStorage.isCreatePopUpOpen) return null;

    return (
        <div className="create-url-popup overlay">
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>Create url</h2>
                <div className="input-container">
                    <Input
                        className="input"
                        placeholder='Your URL'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <button className="close-button" onClick={PopUpsStorage.closeCreatePopUp}>Close</button>
                <button className="create-button" onClick={handleCreateUrl}>Create</button>
            </div>
        </div>
    );
});

export default CreateUrlPopUp;
