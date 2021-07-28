import { Navbar, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logOut from '../../Services/Auth/Logout'
//import history from '../../history';
import { useDispatch } from 'react-redux';
import { logged } from '../../features/tracking/trackingSlice';
import { useHistory } from "react-router-dom";


const Navbaritems = (props) => {
    const dispatch = useDispatch()
    let history = useHistory();

    const handleLogout = async () => {
        const result = await logOut()
        console.log(result)
        if (result) {
            dispatch(logged(false))
            console.log('dispatch')
            //history.push('/')
        }
    }

    if (sessionStorage.getItem('user')) {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey={props.location.pathname}>
                    <Nav.Link as={Link} to="/tracking">Поиск заказов</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/shipments">Мои данные</Nav.Link>
                </Nav>
                <Form inline>
                    {/* переделать кнопку */}
                    <Button onClick={handleLogout}>Выйти</Button> 
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