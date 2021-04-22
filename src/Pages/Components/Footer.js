import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import './bottom_footer.css'

function Footer(props) {
    return (
        <footer className='bottom_footer'>
            <div>
                <Container fluid="sm">
                    <Row>
                    <Col sm={8}>
                        <p className='footer_service_info'>Услуги оказывает ООО «СберЛогистика»</p>
                    </Col>
                    <Col sm={4}>
                        <p className='sber_phone'>8 800 100 72 69</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={8}>
                        <div className='address_field'>
                        <p>119334, Москва г, Вавилова ул, дом 24, корпус 1, помещение XXIX/3</p>
                        <p>ОГРН: 1197746348458</p>
                        <p>ИНН: 7736322345</p>
                        <p>КПП: 773601001</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <p className='footer_phone_info'>Звонок бесплатный <br/>из любой точки России</p>
                        <p className='footer_email'>help@sblogistica.ru</p>
                    </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
};

export default Footer