import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import user_photo from "./../../static/kyle.jpg";
import Image from "react-bootstrap/Image"
import './Profile.css'
import { Link } from 'react-router-dom';
import { Component } from 'react';
import isEmpty from 'lodash.isempty';


class Profile extends Component {
    state = {
        active: 'shipments',
        menuItems: [
            {name:'dispute', alias:'Споры'},
            {name:'settings', alias: 'Настройки'},
            {name:'shipments', alias: 'Мои заказы'},
            {name: 'messages', alias: 'Уведомления'}
        ]
    };

    _handleClick(menuItem) { 
        this.setState({ active: menuItem });
        console.log(this.props.shipments_length.length)
    };

    render(){
        
        const length = isEmpty(this.props.shipments_length) && this.props.shipments_length.length
        return (
            <div className='profile_card'>
                <Card style={{ width: '18rem' }} className="innercard">
                    <Image src={user_photo} className="user_photo"/>
                    <Card.Body className='card-body'>
                        <Card.Title className="card_user_name" >Иван Иванов</Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush">                    
                        {this.state.menuItems.map((key, index) => (
                            <ListGroup.Item key={index}>
                                <div className="orders">
                                    <Link 
                                        to={"/dashboard/" + key.name}
                                        className={this.state.active === key.name ? "card-link-active" : "card-link"} 
                                        onClick={this._handleClick.bind(this, key.name)}
                                    > 
                                        {key.alias}
                                    </Link>
                                    { key.name === "shipments" && length > 0? <div className="numberCircle"><p>{length}</p></div> : <div></div>}
                                </div>
                            </ListGroup.Item> 
                        ))}
                    </ListGroup>
                </Card>
            </div>
        )
    }
    
};

export default Profile;
/*
                        <ListGroup.Item >
                            <div className="orders">
                                <Link 
                                    className={this.state.active === "/dashboard/shipments" ? "card-link-active" : "card-link"}to="/dashboard/shipments" 
                                >Мои заказы</Link>
                                <div className="numberCircle">30</div>
                            </div>
                        </ListGroup.Item>
*/