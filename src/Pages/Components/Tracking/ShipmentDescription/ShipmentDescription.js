import './ShipmentDescription.css';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';


class ShipmentDescription extends Component {
    constructor(props) {
        super(props);
        this.handleNumberAdd = this.handleNumberAdd.bind(this);
    }

    handleNumberAdd = () => {
        this.props.onNumberAdd(this.props.number)
    }

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
                    <Button className="shipment-button" variant="primary">Оплатить пошлину</Button>
                    <Button onClick={this.handleNumberAdd} className="shipment-button" >Добавить в мои заказы</Button>
                </div>
            </div>
        )
    }
    
}

export default ShipmentDescription;