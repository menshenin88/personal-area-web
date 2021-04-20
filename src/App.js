import React from "react";
import './App.css';
import TopNavbar from './Pages/Components/topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Pages/Components/Footer';
import Mainarea from './Pages/Components/Dashboard/Mainarea';
import './Pages/Components/body.css';
import Tracking from './Pages/Components/Tracking/Tracking'
import Login from './Pages/Login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Container fluid="sm" className="maincontainer" >
        <TopNavbar/>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/sign-in">
                <Login />
              </Route>
              <Route path="/tracking">
                <Tracking></Tracking>
              </Route>
              <Route path="/dashboard/shipments">
                <br/>
                <Mainarea/>
              </Route>
            </Switch>       
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
