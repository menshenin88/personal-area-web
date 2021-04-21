import React from 'react';
import './MyShipments.css';
import ShipmentDescription from '../../Tracking/ShipmentDescription/ShipmentDescription';

const MyShipments = (props) => {
    const showNumbers = () => {
        console.log(props.myNumbers.length)
        console.log(props.myNumbers)
    };

    const CheckNumbers = () => {
        if (props.myNumbers.length > 0){
            return (
                <div>
                    {props.myNumbers.map((n, index) =>
                        <ShipmentDescription 
                            status="доставлено"
                            number={n.number}
                            key={index}
                        />
                    )}
                </div>

            )
        } else {
            return (
                <p>У вас нет заказов<button onClick={showNumbers}></button></p>
            )
        }
    }

    return(
        <div className="my-shipments-form">
            <h3 className="shipments-header">Мои заказы</h3>
            <hr className="solid"></hr>
            <CheckNumbers />
        </div>
    )
};

export default MyShipments;