import './ShipmentDescription.css';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import ShipmentEntry from '../ShipmentEntry/ShipmentEntry'
import post_icon from "../../../static/post-icon.svg";
import { useSelector, useDispatch } from 'react-redux'
import { addNumber, deleteNumber } from '../../../features/tracking/trackingSlice'
import DocsUpload from '../../../Components/Dashboard/MyShipments/DocsUpload/DocsUpload'
import PickUpPoint from '../PickUpPoint/PickUpPoint'
import Config from "../../../Services/Config";


const ShipmentDescription = (props) => {
    const [ clickForDetails, setClickForDetails ] = useState(false)
    const tracking = useSelector((state) => state.tracking.myNumbers)
    const dispatch = useDispatch()
   
    const handleNumberAdd = () => {
        dispatch(addNumber(props.details));
        console.log(props);
    };

    const removeNumber = () => {
        console.log(props.details.trackingNumber)
        dispatch(deleteNumber(props.details.trackingNumber))
    };

    const showDetails = () => {
        if (clickForDetails) {
            setClickForDetails(false)
        } else {
            setClickForDetails(true)
        }
    };

    const statusChecker = (s) => {
        if (s === 'final') {
            return 'Доставлено'
        } else if (s === 'first') {
            return 'в обработке'
        } else {
            return 'в пути'
        }
    };

    const showLocation = (location) => {
        return location === "https://cfapi.sberlogistics.ru" ? "API" : location;
    };

    const ShowTracking =() => {
        console.log(props)
        return (
          <div>
            {props.details.trackingHistory.map((n, index) => (
              <ShipmentEntry 
                circleStyleName={n.status} 
                styleName={n.status} 
                status={n.status}
                key={index} 
                location={showLocation(n.opLocation)}
                time={new Date(n.opTime).toLocaleTimeString("ru-RU", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              />
            ))}
          </div>
        )
    };

    return (
        <div className="shipment-description">
            <div>
                <div className="icon-wrapper">
                    <img src={ post_icon } className="icon-green" alt=""/>
                </div>
                <div className="shipment-description-text">
                    <p className='shipment-description-number'>Номер Вашей посылки: {props.number}</p>
                    <p className='shipment-description-status'>Текущий статус: {statusChecker(props.status)}</p>
                    {props.tax%2===0 ? 
                        <Button className="shipment-button disabled" variant="primary" disabled>{Config.paidText}</Button>:
                        <Button className="shipment-button" variant="primary">{Config.makePaymentText}</Button>
                    }
                    {props.onSearch ? 
                        <Button onClick={handleNumberAdd} className="shipment-button" >Добавить в мои заказы!</Button> :
                        <Button onClick={removeNumber} className="shipment-button delete" variant="primary">Удалить из заказов</Button>
                    }
                    {!props.onSearch ?
                        <Button onClick={showDetails} className="shipment-button delete" variant="primary">{ !clickForDetails ? "Показать детали" : "Скрыть детали"}</Button> :
                        <div></div>
                    }
                    {!props.onSearch &&
                        <>
                            <DocsUpload />
                            <PickUpPoint />
                        </>
                    }                   
                </div>
            </div>

            <div>
                {clickForDetails ? <ShowTracking /> : <div></div>}
            </div>

        </div>
    )   
};

export default ShipmentDescription;