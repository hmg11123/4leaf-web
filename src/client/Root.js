import React from "react";
import App from "../App";
import useTitle from "@4leaf.ysh/use-title";

const Root = () => {

    useTitle("4LEAF SOFEWARE");

    return (
        <App />
    );
}

export default Root;