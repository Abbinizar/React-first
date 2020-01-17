import React from "react";
import {Switch, Route} from "react-router-dom"

import Login from "./Login";
import Dashboard from "./Dashboard";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes;