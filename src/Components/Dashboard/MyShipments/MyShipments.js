import React, { Component } from 'react';
import './MyShipments.css';
import ShipmentDescription from '../../Tracking/ShipmentDescription/ShipmentDescription';

class MyShipments extends Component {
    state = {
        onMyShipments: false
    };

    deleteNumber = (data) => {
        this.props.deleteNumber(data)
    };

    CheckNumbers = () => {
        if (this.props.myNumbers.length > 0){
            return (
                <div>
                    {this.props.myNumbers.map((n, i) =>
                        <div key={i} className={(i !== (this.props.myNumbers.length - 1)) ? "shipment-description-wrapper" : "shipment-description-wrapper-last"}>
                            <ShipmentDescription
                                details={this.props.allNumbers.filter(e => e.number === n.number)} 
                                status={n.status}
                                number={n.number} 
                                tax={n.tax}
                                deleteNumber={this.deleteNumber}
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

    render(){
        return(
            <div className="my-shipments-form">
                <h3 className="shipments-header">Мои заказы</h3>
                <hr className="solid"></hr>
                <this.CheckNumbers />
            </div>
        )
    };
};

export default MyShipments;