import React from "react";
import './App.css';
import TopNavbar from './Pages/Components/topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Pages/Components/Footer';
import Mainarea from './Pages/Components/Mainarea';
import './Pages/Components/body.css';
import Tracking from './Pages/Components/Tracking/Tracking'
import Login from './Pages/Login/login';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Container fluid="sm" className="maincontainer" >
        <TopNavbar/>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/settings">
                <h1>Тут будут настройки</h1>
              </Route>
              <Route path="/tracking">
                <Tracking></Tracking>
              </Route>
              <Route path="/dashboard">
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
