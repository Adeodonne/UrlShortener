import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { PopUpsStorage } from "../../../../App/Storages/PopUpsStorage";
import { LinkShortInfo } from "../../LinksPage";
import { UrlApi } from "../../../../App/Api/UrlApi";
import './UrlDetailsPopUp.scss';
import {RedirectUrlServer} from "../../../../App/Api/RedirectUrlServer";

export interface LinkAdditionalInfo extends LinkShortInfo {
    userLogin: string;
    date: string;
}

const UrlDetailsPopUp = observer(() => {
    const [urlInfo, setUrlInfo] = useState<LinkAdditionalInfo | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const urlDetails = PopUpsStorage.getUrlDetails;
            if (urlDetails != null) {
                const details = await UrlApi.getUrlDetails(urlDetails.id)
                setUrlInfo({ ...urlDetails, ...details });
            }
        }

        fetch();
    }, [PopUpsStorage.isUrlDetailsPopUpOpen]);

    if (!PopUpsStorage.isUrlDetailsPopUpOpen) return null;

    return (
        <div className="url-details-popup overlay">
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>Details url</h2>
                <h3>Full link: {urlInfo?.fullUrl}</h3>
                <h3>Short link: {RedirectUrlServer + "/" + urlInfo?.shortUrl}</h3>
                <h3>Creator: {urlInfo?.userLogin}</h3>
                <h3>Date: {urlInfo?.date}</h3>
                <button onClick={PopUpsStorage.closeUrlDetailsPopUp}>Close</button>
            </div>
        </div>
    );
});

export default UrlDetailsPopUp;
