import React, { Component } from "react";
import './App.css';
import TopNavbar from './Pages/Components/topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Pages/Components/Footer';
import Mainarea from './Pages/Components/Dashboard/Mainarea';
import './Pages/Components/body.css';
import Tracking from './Pages/Components/Tracking/Tracking'
import Login from './Pages/Login/login';
import Terms from './Pages/Login/Components/Terms/Terms'
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
    if (sessionStorage.getItem('user')){
      console.log('sucess');
      this.setState({isLogged:true})
    } else {
      console.log('failed')
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
                  <Route path="/sign-in">
                    <Login />
                  </Route>
                  <Route path="/tracking">
                    <Tracking onNumberAdd={this.onNumberAdd} wholeData={this.addAllData}></Tracking>
                  </Route>
                  <Route path="/terms">
                    <Terms></Terms>
                  </Route>
                  <PrivateRoute exact path="/dashboard/shipments" component={Mainarea} myNumbers={this.state.mynumbers} deleteNumber={this.deleteNumber} allNumbers={this.state.allnumbers} />
                  {/* <Route path="/dashboard/shipments">
                    <br/>
                    <Mainarea myNumbers={this.state.mynumbers} deleteNumber={this.deleteNumber} allNumbers={this.state.allnumbers}/>
                  </Route> */}
                </Switch>       
          </Container>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
