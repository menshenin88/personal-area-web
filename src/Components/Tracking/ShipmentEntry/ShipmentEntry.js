import './ShipmentEntry.css'
import done_photo from "../../../static/done.svg"

const ShipmentEntry = (props) => {
    const statusChecker = (s) => {
        if (s === 'EMI') {
            return 'Ваша посылка доставлена по адресу'
        } else if (s === 'NEW') {
            return 'Ваша посылка передана в обработку'
        } else {
            return "Ваша посылка находится в пути"
        }
    };

    return (
        <div className="shipment-course-entry">
            <div className={`course-left ${ props.styleName }`}>
                <div className={`course-left-circle ${ props.circleStyleName }`}>
                    <img src={ done_photo } alt=""></img>
                </div>
            </div>
            <div className="course-text">
                <p className="course-header">{props.location}, {props.time}, {props.day}</p>
                <p className="course-status">{statusChecker(props.status)}</p>
            </div>
        </div>
    )
};

export default ShipmentEntry;