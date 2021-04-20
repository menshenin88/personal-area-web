import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import Dispute from './Dispute/Dispute';
import './Mainarea.css';
import React, { Component } from 'react';

class Mainarea extends Component{
    render(){
        return (
            <div className='main_area'>
                <Container>
                    <Row>
                        <Col md="auto">
                            <Profile/>  
                        </Col>
                        <Col sm={8}>
                            <Dispute />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
}

export default Mainarea