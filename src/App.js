import React, { Component } from "react";
import './App.css';
import TopNavbar from './Components/Topnavbar/Topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Components/Footer/Footer';
import Mainarea from './Containers/Mainarea';
import './Components/body.css';
import Tracking from './Containers/Tracking/Tracking2'
import Login from './Components/Login/login';
import Terms from './Components/Login/Components/Terms/Terms'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import userJson from './Services/Auth/Auth';
import PrivateRoute from './Services/PrivateRoute/PrivateRoute';

class App extends Component {
  state = {
      mynumbers:[],
      allnumbers:[],
      isLogged: false,
      value: ""
    };

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
      console.log('Number added!')   
    }
  };

  deleteNumber = (data) => {
    const myn = this.state.mynumbers.filter(e => e.number !== data)
    this.setState({mynumbers: myn})
    const alln = this.state.allnumbers.filter(e => e.number !== data)
    this.setState({allnumbers: alln})
  };

  componentDidMount() {
    document.title = 'Welcome';
    userJson();
    if (sessionStorage.getItem('user') != null){
      console.log('session is active, user is ' + sessionStorage.getItem('user'));
      this.setState({isLogged:true})
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Container fluid="sm" className="maincontainer" >
            <TopNavbar/>
                <Switch>
                  <Route exact path="/">
                    <Login />
                  </Route>
                  <PrivateRoute path="/tracking" component={() => <Tracking onNumberAdd={this.onNumberAdd} wholeData={this.addAllData}/>} />
                  <PrivateRoute exact path="/terms" component={() => <Terms/>}/>
                  <PrivateRoute exact path="/dashboard/shipments" component={() => <Mainarea myNumbers={this.state.mynumbers} deleteNumber={this.deleteNumber} allNumbers={this.state.allnumbers} />}  />
                </Switch>
          </Container>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
