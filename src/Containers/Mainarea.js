import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Mainarea.css';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import React, { Component } from 'react';
import MyShipments from '../Components/Dashboard/MyShipments/MyShipments';
import MyMessages from '../Components/Dashboard/MyMessages/MyMessages'
import Profile from '../Components/Dashboard/Profile';
import Dispute from '../Components/Dashboard/Dispute/Dispute';
import MySettings from '../Components/Dashboard/MySettings/MySettings';


class Mainarea extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    componentDidMount() {
        document.title = 'Profile';
    }
    
    deleteNumber = (data) => {
        this.props.deleteNumber(data)
    };

    render(){
        const { location, myNumbers } = this.props;

        return (
            <BrowserRouter>
                <div className='main_area'>
                    <Container>
                        <Row>
                            <Col md="auto" className='column' >
                                <Profile shipments_length={myNumbers} activeKey={location.pathname}/>  
                            </Col>
                            <Col sm={8} className='column second' >
                                <Switch>
                                    <Route exact path="/dashboard/dispute">
                                        <Dispute />
                                    </Route>  
                                </Switch>
                                <Switch>
                                    <Route path="/dashboard/settings">
                                        <MySettings />
                                    </Route>  
                                </Switch>
                                <Switch>
                                    <Route path="/dashboard/shipments">
                                        <MyShipments />
                                    </Route>  
                                </Switch>
                                <Switch>
                                    <Route path="/dashboard/messages">
                                        <MyMessages/>
                                    </Route>  
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>

        )
    }  
};

export default withRouter(Mainarea);