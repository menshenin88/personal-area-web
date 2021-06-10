import React from 'react';
import './MyMessages.css';
import Message from './Message/Message'
import { useSelector } from 'react-redux'

const MyShipments = (props) => {
    const myNumbers = useSelector((state) => state.tracking.myNumbers)
    return(
        <div className="my-messages-form">
            <h3 className="messages-header">Мои уведомления</h3>
            <hr className="solid"></hr>
            {myNumbers.map((n, i) =>
                <div key={i} className={(i !== (myNumbers.length - 1)) ? "message-description-wrapper" : "message-description-wrapper-last"}>
                    <Message
                        number={n.trackingNumber}
                        type='tax'
                    />
                    <Message
                        number={n.trackingNumber}
                        type='docs'
                    />
                </div>

            )}
        </div>
    )
};

export default MyShipments;

