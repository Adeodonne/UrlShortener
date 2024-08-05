import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {UrlApi} from "../../App/Api/UrlApi";

const RedirectPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.slice(1, location.pathname.length);

    useEffect(() => {
        const fetch = async () => {
            try {
                const fullUrl = (await UrlApi.getFullUrl(pathname)).fullUrl;
                window.location.href = fullUrl;
            } catch (error) {
                alert("Such link dont exist or was deleted")
                navigate("/links");
            }
        }

        fetch()
    }, []);

    return (
        <div>
        </div>
    );
};

export default RedirectPage;
