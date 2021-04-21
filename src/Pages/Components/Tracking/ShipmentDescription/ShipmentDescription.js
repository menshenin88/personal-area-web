import './ShipmentDescription.css';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';


class ShipmentDescription extends Component {
    constructor(props) {
        super(props);
        this.handleNumberAdd = this.handleNumberAdd.bind(this);
        this.state ={
            onMyShipments: true
        };
    };

    handleNumberAdd = () => {
        this.props.onNumberAdd(this.props)
    };

    statusChecker = (s) => {
        if (s === 'final') {
            return 'Доставлено'
        } else if (s === 'first') {
            return 'в обработке'
        } else {
            return 'в пути'
        }
    };
    render() {
        return (
            <div className="shipment-description">
                <div className="shipment-description-text">
                    <p className='shipment-description-number'>Номер Вашей посылки: {this.props.number}</p>
                    <p className='shipment-description-status'>Текущий статус: {this.statusChecker(this.props.status)}</p>
                    {this.props.tax !== "paid" ? 
                        <Button className="shipment-button" variant="primary">Оплатить пошлину</Button> : 
                        <Button className="shipment-button disabled" variant="primary" disabled>Пошлина оплачена</Button>
                    }
                    {this.state.onMyShipments ? 
                        <Button onClick={this.handleNumberAdd} className="shipment-button" >Добавить в мои заказы</Button> :
                        <Button className="shipment-button delete" variant="primary">Удалить из заказов</Button>
                    }  
                </div>
            </div>
        )
    };   
};

export default ShipmentDescription;