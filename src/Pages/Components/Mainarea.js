import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import './Mainarea.css';

function Mainarea(props) {
    return (
        <div className='main_area'>
            <Container>
                <Row>
                    <Col md="auto">
                        <Profile/>  
                    </Col>
                    <Col sm={8}>
                        <div>
                            <h3>Споры</h3>

                            <Nav defaultActiveKey="/home" as="ul" justify="false">
                                <Nav.Item as="li">
                                    <Nav.Link href="/home" className="disputenavitem active">
                                        <p className="disputetext active">Активные</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="box-e">
                                    <Nav.Link eventKey="link-1" className="disputenavitem">
                                        <p className="disputetext">Закрытые</p>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="dispute">
                                <p>У вас нет активных споров</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mainarea