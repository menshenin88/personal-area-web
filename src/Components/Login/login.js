import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import './login.css'
import SberIdButton from "./Components/SberIdButton/SberIdButton";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Terms from './Components/Terms/Terms'
import { useSelector, useDispatch } from 'react-redux'



const Login = ({isLogged}) => {

    if (isLogged){
        return (
            <Redirect to="/dashboard/shipments" />
        )
    }
    return (
        <Router>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Form className="login-form">
                        <Switch>
                            <Route exact path="/">
                                <SberIdButton />
                            </Route>
                        </Switch>
                    </Form>                                 
                </div>
            </div>
        </Router>
    );
};

export default Login;
