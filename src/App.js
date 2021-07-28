import React, { Component, useEffect } from "react";
import './App.css';
import TopNavbar from './Components/Topnavbar/Topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Components/Footer/Footer';
import Mainarea from './Containers/Mainarea';
import './Components/body.css';
import Tracking from './Containers/Tracking/Tracking2'
import Login from './Components/Login/login';
import Terms from './Components/Login/Components/Terms/Terms'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import userJson from './Services/Auth/Auth';
import PrivateRoute from './Services/PrivateRoute/PrivateRoute';
import history from './history';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from './features/tracking/trackingSlice'

const App = () => {
  const isLogged = useSelector((state) => state.tracking.isLogged)
  const dispatch = useDispatch()
  // state = {
  //     mynumbers:[],
  //     allnumbers:[],
  //     isLogged: false,
  //     value: ""
  //   };

  useEffect(() => {
    const value = userJson().then(data => dispatch(logged(true)))
    console.log(value)
  }, [])

  return (
    <BrowserRouter history={history}>
      <div className="wrapper">
        <Container fluid="sm" className="maincontainer" >
          <TopNavbar/>
              <Switch>
                <Route exact path="/">
                  {
                    isLogged?
                      <Redirect to="/dashboard/shipments"  />
                      :<Login isLogged={isLogged}/>
                  } 
                </Route>
                <PrivateRoute path="/tracking" component={() => <Tracking />} />
                <PrivateRoute exact path="/terms" component={() => <Terms/>}/>
                <PrivateRoute exact path="/dashboard/shipments" component={() => <Mainarea />}  />
              </Switch>
        </Container>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
