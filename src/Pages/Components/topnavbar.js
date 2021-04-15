import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Logo from "../static/logo.svg"
import './topnavbar.css'


function TopNavbar (props) {
    return (
        <div id="app" className="Navbar-container">
            <Navbar bg="light" expand="xl">
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        className="sberlogo"
                        alt={process.env.REACT_APP_SITE_NAME}
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Заказы</Nav.Link>
                            <Nav.Link href="#link">Мои данные</Nav.Link>
                            <Nav.Link href="#link">Претензии</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Nav.Link href="#link">Иван Иванов</Nav.Link>
                        </Form>
                    </Navbar.Collapse>
            </Navbar>
        </div>
            )
}

export default TopNavbar