import './ShipmentDescription.css';
import Button from 'react-bootstrap/Button'


const ShipmentDescription = (props) => {
    const statusChecker = (s) => {
        if (s === 'final') {
            return 'Доставлено'
        } else if (s === 'first') {
            return 'в обработке'
        } else {
            return 'в пути'
        }
    };

    return (
        <div className="shipment-description">
            <div className="shipment-description-text">
                <p className='shipment-description-number'>Номер Вашей посылки: {props.number}</p>
                <p className='shipment-description-status'>Текущий статус: {statusChecker(props.status)}</p>
                <Button className="shipment-button" variant="primary">Оплатить пошлину</Button>
                <Button className="shipment-button" >Добавить в мои заказы</Button>
            </div>
        </div>
    )
}

export default ShipmentDescription;