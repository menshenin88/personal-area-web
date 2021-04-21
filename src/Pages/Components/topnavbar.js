import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Logo from "../static/logo.svg"
import './topnavbar.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import React from 'react';
import { Link } from 'react-router-dom';


class TopNavbar extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }; 

    render() {
        const { location } = this.props;

        return (
            <div id="app" className="Navbar-container">
                <Navbar bg="light" expand="xl">
                    <Navbar.Brand className="logo-container" href="/login">
                        <img
                            src={Logo}
                            className="sberlogo"
                            alt={process.env.REACT_APP_SITE_NAME}   
                        />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" activeKey={location.pathname}>
                                <Nav.Link as={Link} to="/tracking">Поиск заказов</Nav.Link>
                                <Nav.Link as={Link} to="/dashboard/shipments">Мои данные</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Nav.Link as={Link} to="/dashboard/shipments">Иван Иванов</Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(TopNavbar)