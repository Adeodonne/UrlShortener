import React from 'react';
import { observer } from 'mobx-react-lite';
import ShortLinkItem from "./Components/ShortLinkItem/ShortLinkItem";
import { userStore } from "../../../../App/Storages/UserStorage";
import { LinkShortInfo } from "../../LinksPage";
import './ShortLinkTable.scss';

interface ShortLinkTableProps {
    linksShortInfo: LinkShortInfo[];
}

const ShortLinkTable = observer(({ linksShortInfo }: ShortLinkTableProps) => {
    return (
        <div className="short-link-table">
            <div className="header">Short links</div>
            <ul>
                {linksShortInfo.map(link => (
                    <li key={link.id}>
                        <ShortLinkItem linkShortInfo={link} isUserAdmin={userStore.isAdmin} userId={userStore.getId} />
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default ShortLinkTable;
