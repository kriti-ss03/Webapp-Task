import React, { useEffect, useRef } from "react";
import { useState } from "react";
import query from "../utils/api";
import DisplayArea from "./DisplayArea";
import Form from "./Form";

const App = () => {
    const [queryString, setQueryString] = useState("");
    console.log("App rendered")

    function onSubmit(e) {
        e.preventDefault();
    }

    console.log(queryString);
    return <>
        <header>Comic Creatoars Web App</header>
        <main>
            <Form setQueryString={setQueryString} />
            {queryString && <DisplayArea queryString={queryString} />}
        </main>
    </>
};

export default App;