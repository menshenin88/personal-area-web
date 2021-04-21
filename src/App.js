import React, { Component } from "react";
import './App.css';
import TopNavbar from './Pages/Components/topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Pages/Components/Footer';
import Mainarea from './Pages/Components/Dashboard/Mainarea';
import './Pages/Components/body.css';
import Tracking from './Pages/Components/Tracking/Tracking'
import Login from './Pages/Login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.onNumberAdd = this.onNumberAdd.bind(this);
    this.state = {
      mynumbers:[]
    }
  }

  onNumberAdd = (num) => {
    if (this.state.mynumbers.filter(e => e.number === num).length > 0) {
      console.log('Number already exists!')
    } else {
      this.setState(previousState => ({
        mynumbers: [...previousState.mynumbers, {number: num}]
      }));
      console.log('Number added!')
    }
  };

  render() {
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
                  <Tracking onNumberAdd={this.onNumberAdd}></Tracking>
                </Route>
                <Route path="/dashboard/shipments">
                  <br/>
                  <Mainarea myNumbers={this.state.mynumbers}/>
                </Route>
              </Switch>       
        </Container>
        <Footer/>
      </BrowserRouter>
    );
  }
};

export default App;
