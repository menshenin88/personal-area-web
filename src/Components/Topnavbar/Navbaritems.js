import { Navbar, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbaritems = (props) => {
    if (sessionStorage.getItem('user')) {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey={props.location.pathname}>
                    <Nav.Link as={Link} to="/tracking">Поиск заказов</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/shipments">Мои данные</Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link as={Link} to="/dashboard/shipments">Выйти</Nav.Link>
                </Form>
            </Navbar.Collapse>
        ) 
    } else {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav.Link as={Link} to="/">Войти</Nav.Link>
                </Form>
            </Navbar.Collapse>
        )
    }
}

export default Navbaritems;