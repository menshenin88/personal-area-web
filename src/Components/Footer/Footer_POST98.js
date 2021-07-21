import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import './Footer.css'

function Footer(props) {
    return (
        <footer className='bottom_footer'>
            <div>
                <Container fluid="sm">
                    <Row>
                    <Col sm={8}>
                        <p className='footer_service_info'>Услуги оказывает ООО «Пост 98»</p>
                    </Col>
                    <Col sm={4}>
                        <p className='phone_field'>8 800 123 45 67</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={8}>
                        <div className='address_field'>
                        <p>295022, респ. Крым, г. Симферополь, Жени Дерюгиной ул., д. 10, пом. 46</p>
                        <p>ОГРН: 1197746348458</p>
                        <p>ИНН: 9102271038</p>
                        <p>КПП: 910201001</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <p className='footer_phone_info'>Звонок бесплатный <br/>из любой точки России</p>
                        <p className='footer_email'>help@post98.ru</p>
                    </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
};

export default Footer