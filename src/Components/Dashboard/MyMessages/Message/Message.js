import './Message.css';
import Button from 'react-bootstrap/Button'
import React from 'react';
import message_icon from "../../../../static/message-icon4.svg"
import DocsUpload from '../../MyShipments/DocsUpload/DocsUpload'


const Message = (props) => {

    return (
        <div className="message-description">
            <div>
                <div className="icon-wrapper">
                    <img src={ message_icon } className="icon-green" alt=""/>
                </div>
                <div className="message-description-text">
                    <p className='message-description-number'>Ваша посылка: {props.number}</p>
                    {props.type === "tax" &&
                        <div>
                            <p className='message-description-text'>Необходимо оплатить пошлину</p>
                            <Button className="message-button" variant="primary">Оплатить пошлину</Button>
                        </div>
                    }
                    {props.type === "docs" &&
                        <div>
                            <p className='message-description-text'>Необходимо предоставить документы</p>
                            <DocsUpload/> 
                        </div>
                    }               
                </div>
            </div>
        </div>
    )   
};

export default Message;