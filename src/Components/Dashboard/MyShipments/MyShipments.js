import React from 'react';
import './MyShipments.css';
import ShipmentDescription from '../../Tracking/ShipmentDescription/ShipmentDescription';
import { useSelector, useDispatch } from 'react-redux'

const MyShipments = (props) => {
    const myNumbers = useSelector((state) => state.tracking.myNumbers)
    const dispatch = useDispatch()

    const deleteNumber = (data) => {
        dispatch(deleteNumber(data))
    };

    const CheckNumbers = () => {
        if (myNumbers.length > 0){
            return (
                <div>
                    {myNumbers.map((n, i) =>
                        <div key={i} className={(i !== (myNumbers.length - 1)) ? "shipment-description-wrapper" : "shipment-description-wrapper-last"}>
                            <ShipmentDescription
                                details={n}
                                location={n.trackingHistory[0].opLocation}
                                status={n.trackingHistory[0].status}
                                number={n.trackingNumber}
                                tax={n.tax}
                                time={n.trackingHistory[0].opTime}
                                deleteNumber={deleteNumber}
                                docs={true}
                            />
                        </div>

                    )}
                </div>

            )
        } 
        return (
            <p className="no-orders-message">У вас нет заказов</p>
        )
    };

    
    return(
        <div className="my-shipments-form">
            <h3 className="shipments-header">Мои заказы</h3>
            <hr className="solid"></hr>
            <CheckNumbers />
        </div>
    )
};

export default MyShipments;