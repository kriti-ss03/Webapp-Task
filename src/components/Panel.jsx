import React, { useEffect } from 'react'
import fetchImageURL from '../utils/fetchImageURL';
import query from '../utils/api';
import { useState } from 'react';
import Spinner from './Spinner';
import "./Panel.css"

function Panel({ queryString }) {
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [imageURL, setImageURL] = useState("");

    async function setURL() {
        try {
            setLoadingStatus("loading");
            let urlCreator = window.URL || window.webkitURL;
            const response = await query({ inputs: queryString });
            let imageUrl = urlCreator.createObjectURL(response);
            setImageURL(imageUrl);
            setLoadingStatus("loaded");
        } catch (error) {
            console.log(error);
            setLoadingStatus("failed");
        }
    }

    useEffect(() => {

        setURL();
        return () => {
            let urlCreator = window.URL || window.webkitURL;
            urlCreator.revokeObjectURL(imageURL);
        }
    }, [queryString]);


    return (
        <div className='panel'>
            {loadingStatus == "loaded" && <img src={imageURL} />}
            {loadingStatus == "loading" && <Spinner />}
            {loadingStatus == "failed" && <input type="button" onClick={setURL} value={"Try again"} />}
        </div>
    )
}

export default Panel;