import React from 'react'
import { useState } from 'react';

function Form({ setQueryString }) {
    const [inputText, setInputText] = useState("");
    function onSubmit(e) {
        e.preventDefault();
        alert();
        setQueryString(inputText);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <input type="submit" value={"Create"} />
        </form>
    )
}

export default Form