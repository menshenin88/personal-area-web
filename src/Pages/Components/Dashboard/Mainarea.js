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

class Mainarea extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }; 

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
                                        <h1>Здесь заказы</h1>
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