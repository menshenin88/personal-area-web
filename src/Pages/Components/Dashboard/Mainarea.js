import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import Dispute from './Dispute/Dispute';
import MySettings from './MySettings/MySettings';
import './Mainarea.css';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import React, { Component } from 'react';
import MyShipments from './MyShipments/MyShipments';

class Mainarea extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    deleteNumber = (data) => {
        this.props.deleteNumber(data)
    }

    render(){
        const { location } = this.props;

        return (
            <BrowserRouter>
                <div className='main_area'>
                    <Container>
                        <Row>
                            <Col md="auto">
                                <Profile activeKey={location.pathname}/>  
                            </Col>
                            <Col sm={8}>
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
                                        <MyShipments myNumbers={this.props.myNumbers} deleteNumber={this.deleteNumber} allNumbers={this.props.allNumbers}/>
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