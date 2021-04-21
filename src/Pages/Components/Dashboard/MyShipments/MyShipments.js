import React, {Component, useState} from 'react';
import './MyShipments.css';
import ShipmentDescription from '../../Tracking/ShipmentDescription/ShipmentDescription';

class MyShipments extends Component {
    constructor(props) {
        super(props);
        this.state = {onMyShipments: false};
      }

    showNumbers = () => {
        console.log(this.props.myNumbers.length)
        console.log(this.props.myNumbers)
    };

    CheckNumbers = () => {
        if (this.props.myNumbers.length > 0){
            return (
                <div>
                    {this.props.myNumbers.map((n, index) =>
                        <div key={index} className="shipment-description-wrapper">
                            <ShipmentDescription 
                                status={n.status}
                                number={n.number} 
                                tax={n.tax}
                            />
                        </div>

                    )}
                </div>

            )
        } else {
            return (
                <p>У вас нет заказов<button onClick={this.showNumbers}></button></p>
            )
        }
    }
    render(){
        return(
            <div className="my-shipments-form">
                <h3 className="shipments-header">Мои заказы</h3>
                <hr className="solid"></hr>
                <this.CheckNumbers />
            </div>
        )
    }

};

export default MyShipments;