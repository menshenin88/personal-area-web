import React, { Component } from 'react';
import './MyShipments.css';
import ShipmentDescription from '../../Tracking/ShipmentDescription/ShipmentDescription';

class MyShipments extends Component {
    state = {
        onMyShipments: false
    };

    showNumbers = () => {
        console.log(this.props.allNumbers.length)
        console.log(this.props.allNumbers)
    };

    deleteNumber = (data) => {
        this.props.deleteNumber(data)
    };



    CheckNumbers = () => {
        if (this.props.myNumbers.length > 0){
            return (
                <div>
                    {this.props.myNumbers.map((n, index) =>
                        <div key={index} className="shipment-description-wrapper">
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
            <p>У вас нет заказов<button onClick={this.showNumbers}></button></p>
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
    }

};

export default MyShipments;