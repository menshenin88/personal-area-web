import Form from "react-bootstrap/Form";
import './login.css'
import SberIdButton from "./Components/SberIdButton/SberIdButton";
import SberIdLoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = () => {
    return (
        <Router>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Form className="login-form">
                        <Switch>
                            <Route exact path="/">
                                <SberIdButton />
                            </Route>
                            <Route exact path="/sign-in">
                                <SberIdLoginForm />
                            </Route>
                        </Switch>
                    </Form>                                 
                </div>
            </div>
        </Router>


    );
};

export default Login;
