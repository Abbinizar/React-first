import React from "react";
import {Switch, Route} from "react-router-dom"

// import Login from "./Login";
import Dashboard from "./Dashboard";
// import Effect from "./State/useEffect.js"
import Chat from "./Chat"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Chat />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes;