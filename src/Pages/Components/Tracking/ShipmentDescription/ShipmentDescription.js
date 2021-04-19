import './ShipmentDescription.css';
import {Link} from 'react-router-dom';

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
                <p className="shipment-tax">Пошлина: <Link to="#/">оплатить</Link></p>
            </div>
        </div>
    )
}

export default ShipmentDescription;