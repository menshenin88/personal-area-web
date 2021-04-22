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
      mynumbers:[],
      allnumbers:[]
    }
  }

  onNumberAdd = (num) => {
    if (this.state.mynumbers.filter(e => e.number === num.number).length > 0) {
      console.log('Number already exists!')
    } else {
      this.setState(previousState => ({
        mynumbers: [...previousState.mynumbers, {number: num.number, time: num.time, location: num.location, status: num.status, tax: num.tax}]
      }));
      /*
      this.setState(previousState => ({
        allnumbers: [...previousState.allnumbers, {allnumbers:num.details}]
      }));
      */
      num.details.map((n, index) => (
        this.setState(previousState => ({
          allnumbers: [...previousState.allnumbers, n]
        }))
      ))
      //this.state.allnumbers.push(num.details)
      console.log('Number added!')   
    }
    //this.setState({allnumbers: num.details})
    console.log(this.state.allnumbers)
    console.log(this.state.mynumbers)
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
                    <Tracking onNumberAdd={this.onNumberAdd} wholeData={this.addAllData}></Tracking>
                  </Route>
                  <Route path="/dashboard/shipments">
                    <br/>
                    <Mainarea myNumbers={this.state.mynumbers} deleteNumber={this.deleteNumber} allNumbers={this.state.allnumbers}/>
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
