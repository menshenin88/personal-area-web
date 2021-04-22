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
    if (this.state.mynumbers.filter(e => e.number === num.number).length > 0) {
      console.log('Number already exists!')
    } else {
      this.setState(previousState => ({
        mynumbers: [...previousState.mynumbers, {number: num.number, time: num.time, location: num.location, status: num.status, tax: num.tax}]
      }));
      console.log('Number added!')
    }
  };

  deleteNumber = (data) => {
    const arrayNumber = this.state.mynumbers.filter(e => e.number !== data)
    this.setState({mynumbers: arrayNumber})
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
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
                    <Mainarea myNumbers={this.state.mynumbers} deleteNumber={this.deleteNumber}/>
                  </Route>
                </Switch>       
          </Container>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
