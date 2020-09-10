import React from 'react';
import NavBar from "./views/NavBar";

import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";

const Mercury = () => {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );
};

export default Mercury;