import './ShipmentEntry.css'

const ShipmentEntry = () => {
    return (
        <div className="shipment-course-entry">
            <div className="course-left">
                <div className="course-left-circle"></div>
            </div>
            <div className="course-text">
                <p className="course-header">Вторник, 13.04.2021, 15:24</p>
                <p className="course-status">Ваша посылка доставлена по адресу</p>
            </div>
        </div>
    )
}

export default ShipmentEntry;