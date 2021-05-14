import React from 'react';
import ShipmentEntry from '../ShipmentEntry/ShipmentEntry'

const TrackingHistory = (props) =>{
    return (
        <>
            {Object.keys(props.trackingdata).length > 0 &&
                props.trackingdata.trackingHistory.map((n, index) => (
                <ShipmentEntry
                    circleStyleName={n.status}
                    styleName={n.status}
                    status={n.status}
                    key={index}
                    location={n.opLocation}
                    time={n.opTime}
                    day={n.opTime}
                />
            ))}
        </>
    );
};

export default TrackingHistory;