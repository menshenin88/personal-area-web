import React from "react";
import ShipmentEntry from "../ShipmentEntry/ShipmentEntry";

const TrackingHistory = (props) => {
  return (
    <>
      {Object.keys(props.trackingData).length > 0 &&
        props.trackingData.trackingHistory.map((n, index) => (
          <ShipmentEntry
            circleStyleName={n.status}
            styleName={n.status}
            status={n.status}
            key={index}
            location={n.opLocation}
            time={new Date(n.opTime).toLocaleTimeString("ru-RU", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))}
    </>
  );
};

export default TrackingHistory;
