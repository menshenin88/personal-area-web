import './ShipmentDescription.css';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import ShipmentEntry from '../ShipmentEntry/ShipmentEntry'
import post_icon from "../../../static/post-icon.svg";


class ShipmentDescription extends Component {
    state = {
        clickForDetails: false
    };

    handleNumberAdd = () => {
        this.props.onNumberAdd(this.props)
    };

    deleteNumber = () => {
        this.props.deleteNumber(this.props.number)
    };

    showDetails = () => {
        console.log(this.props.details)
        if (this.state.clickForDetails) {
            this.setState({clickForDetails: false})
        } else {
            this.setState({clickForDetails: true})
        }
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

    ShowTracking =() => {
        return (
          <div>
            {this.props.details.map((n, index) => (
              <ShipmentEntry 
                circleStyleName={n.status} 
                styleName={n.status} 
                status={n.status}
                key={index} 
                location={n.location}
                time={new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format(n.time)}
                day={new Date(n.time).toISOString().slice(0, 10)}
              />
            ))}
          </div>
        )
    };

    render() {
        return (
            <div className="shipment-description">
                <div>
                    <div className="icon-wrapper">
                        <img src={ post_icon } className="icon-green" alt=""/>
                    </div>
                    <div className="shipment-description-text">
                        <p className='shipment-description-number'>Номер Вашей посылки: {this.props.number}</p>
                        <p className='shipment-description-status'>Текущий статус: {this.statusChecker(this.props.status)}</p>
                        {this.props.tax !== "paid" ? 
                            <Button className="shipment-button" variant="primary">Оплатить пошлину</Button> : 
                            <Button className="shipment-button disabled" variant="primary" disabled>Пошлина оплачена</Button>
                        }
                        {this.props.onSearch ? 
                            <Button onClick={this.handleNumberAdd} className="shipment-button" >Добавить в мои заказы</Button> :
                            <Button onClick={this.deleteNumber} className="shipment-button delete" variant="primary">Удалить из заказов</Button>
                        }
                        {!this.props.onSearch ?
                            <Button onClick={this.showDetails} className="shipment-button delete" variant="primary">{ !this.state.clickForDetails ? "Показать детали" : "Скрыть детали"}</Button> :
                            <div></div>
                        }                   
                    </div>
                </div>

                <div>
                    {this.state.clickForDetails ? <this.ShowTracking /> : <div></div>}
                </div>

            </div>
        )
    };   
};

export default ShipmentDescription;