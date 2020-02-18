import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { usuarioAutenticado } from "./services/auth";
import Login from "./pages/Login";
import JobView from "./pages/JobsView";
import JobRegister from "./pages/JobsRegister";
import ProfileRegister from "./pages/ProfileRegister";

const PrivateRoute = ({ component : Component }) => (
    <Route
        render={props => 
            usuarioAutenticado() ?
                (<Component {...props} />) :
                (<Redirect to={"/"} />)
            }
        />   
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/" />
            <PrivateRoute component={JobView} exact path="/jobview" />
            <Route component={JobRegister} exact path="/jobregister" />
            <Route component={ProfileRegister} exact path="/profileregister"></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;