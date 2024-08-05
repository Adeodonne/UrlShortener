import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { PopUpsStorage } from "../../../../../../App/Storages/PopUpsStorage";
import { LinkShortInfo } from "../../../../LinksPage";
import { userStore } from "../../../../../../App/Storages/UserStorage";
import './ShortLinkItem.scss';
import {RedirectUrlServer} from "../../../../../../App/Api/RedirectUrlServer";

interface ShortLinkTableProps {
    linkShortInfo: LinkShortInfo,
    isUserAdmin: boolean | undefined,
    userId: string | undefined
}

function ShortLinkItem({ linkShortInfo, isUserAdmin, userId }: ShortLinkTableProps) {
    const [canDelete, setCanDelete] = useState<boolean>(false);

    const handleClickDeleteButton = () => {
        PopUpsStorage.showDeletePopUp(linkShortInfo.id);
    }

    useEffect(() => {
        setCanDelete(isUserAdmin || userId === linkShortInfo.creatorId);
        console.log(userId, canDelete, linkShortInfo.creatorId);
    }, [userStore.getId, isUserAdmin, userId, linkShortInfo.creatorId]);

    const handleClickShowDetailsButton = () => PopUpsStorage.showUrlDetailsPopUp(linkShortInfo);

    return (
        <div className="short-link-item">
            <li key={linkShortInfo.id}>
                <a href={linkShortInfo.fullUrl} target="_blank" rel="noopener noreferrer">
                    {linkShortInfo.fullUrl}
                </a>
                <a href={RedirectUrlServer + "/" + linkShortInfo.shortUrl} target="_blank" rel="noopener noreferrer">
                    {RedirectUrlServer + "/" + linkShortInfo.shortUrl}
                </a>
                <div className="icons">
                    <VisibilityIcon className="icon" onClick={handleClickShowDetailsButton} />
                    {canDelete && <DeleteIcon className="icon delete-icon" onClick={handleClickDeleteButton} />}
                </div>
            </li>
        </div>
    );
}

export default ShortLinkItem;
