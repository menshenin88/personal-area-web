import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import user_photo from "../static/kyle.jpg";
import Image from "react-bootstrap/Image"
import './Profile.css'

function Profile(props) {
    return (
        <div className='profile_card'>
            <Card style={{ width: '18rem' }} className="innercard">
                <Image src={user_photo} className="user_photo"/>
                <Card.Body>
                    <Card.Title className="card_user_name" >Иван Иванов</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className="orders">
                            <p>Заказы</p>
                            <div className="numberCircle">30</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>Споры</ListGroup.Item>
                    <ListGroup.Item>Настройки</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Profile