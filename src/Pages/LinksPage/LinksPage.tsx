import React, { useEffect, useState } from 'react';
import ShortLinkTable from "./Components/ShortLinkTable/ShortLinkTable";
import DeletePopUp from "./Components/DeletePopUp/DeletePopUp";
import CreateUrlPopUp from "./Components/CreateUrlPopUp/CreateUrlPopUp";
import { PopUpsStorage } from "../../App/Storages/PopUpsStorage";
import UrlDetailsPopUp from "./Components/UrlDetailsPopUp/UrlDetailsPopUp";
import { allUrlsStorage } from "../../App/Storages/AllUrlsStorage";
import './LinksPage.scss';

export interface LinkShortInfo {
    id: string;
    shortUrl: string;
    fullUrl: string;
    creatorId: string;
}

function LinksPage() {
    const [linksShortInfo, setLinksShortInfo] = useState<LinkShortInfo[]>([]);

    useEffect(() => {
        const fetch = async () => {
            await allUrlsStorage.updateAllUrls();
            setLinksShortInfo(allUrlsStorage.getAllUrls)
        }

        fetch()
    }, [allUrlsStorage.allUrls]);

    return (
        <div className="links-page">
            <div className="header">
                <button className="create-button" onClick={PopUpsStorage.showCreatePopUp}>+</button>
            </div>
            <ShortLinkTable linksShortInfo={linksShortInfo} />
            <DeletePopUp />
            <CreateUrlPopUp />
            <UrlDetailsPopUp />
        </div>
    );
}

export default LinksPage;
