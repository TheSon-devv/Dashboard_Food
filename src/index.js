/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { ToastProvider } from "react-toast-notifications";

// core components
import Admin from "layouts/Admin.js";
import SignIn from "./views/Login/SignIn";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ToastProvider autoDismiss={true}>
            <Router history={hist}>
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/admin" component={Admin} />
                    <Redirect from="/" to="/signin" />
                </Switch>
            </Router>
        </ToastProvider>
    </Provider>,
    document.getElementById("root")
);
