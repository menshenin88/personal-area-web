import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../static/logo.svg"
import './Topnavbar.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import React from 'react';
import { Link } from 'react-router-dom';
import Navbaritems from './Navbaritems';


class TopNavbar extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

    render() {
        const { location } = this.props
        return (
            <div id="app" className="Navbar-container">
                <Navbar bg="light" expand="xl">
                    <Navbar.Brand className="logo-container" as={Link} to="/">
                        <img
                            src={Logo}
                            className="sberlogo"
                            alt={process.env.REACT_APP_SITE_NAME}   
                        />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbaritems location={location}/>
                </Navbar>
            </div>
        )
    }
};

export default withRouter(TopNavbar)