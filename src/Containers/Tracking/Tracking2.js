import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Tracking.css";
import ShipmentDescription from "../../Components/Tracking/ShipmentDescription/ShipmentDescription";
import GetTracking from "../../Services/GetTracking/GetTracking";
import TrackingHistory from "../../Components/Tracking/TrackingHistory/TrackingHistory";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from 'react-redux'
import { addNumber, deleteNumber } from '../../features/tracking/trackingSlice'

const Tracking = (props) => {
    const [hasBeenSearched, setHasBeenSearched] = useState(false);
    const [searching, setSearching] = useState(false);
    const [onSearch, setOnSearch] = useState(true);
    const [trackingData, setTrackingData] = useState({});

    const trackingNumbers = useSelector((state) => state.tracking.myNumbers)
    const dispatch = useDispatch()

    const addNumberHandler = (data) => {
        props.onNumberAdd(data);
    };

    const TrackingHandler = async (event) => {
        if (event.target.value.trim().length > 0) {
        const tracker = await GetTracking(event.target.value.trim()).then(
            (response) => response
        );
        console.log(tracker);
        if (tracker) {
            setTrackingData(prev => ({ ...prev, ...tracker}));
            setHasBeenSearched(true);
            setSearching(false);
        } else {
            setTrackingData({});
            setHasBeenSearched(false);
            setSearching(true);
        }
        } else {
        setSearching(false);
        }
    };

    return (
        <div className="tracking_area">
            <InputGroup
                className="shipment-input"
                onChange={debounce((event) => {
                    TrackingHandler(event);
                }, 1000)}
            >
            <InputGroup.Prepend>
                <InputGroup.Text>Введите трек-номер</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="With textarea" />
            </InputGroup>
            {hasBeenSearched && (
                <ShipmentDescription
                    //onNumberAdd={addNumberHandler}
                    details={trackingData}
                    location={trackingData.trackingHistory[0].opLocation}
                    status={trackingData.trackingHistory[0].status}
                    number={trackingData.trackingNumber}
                    tax="paid"
                    time={trackingData.trackingHistory[0].opTime}
                    onSearch={onSearch}
                />
            )}
            {searching && (
            <p className="tracking-message">
                По данному трек-номеру ничего не найдено
            </p>
            )}
            {hasBeenSearched && <TrackingHistory trackingData={trackingData} />}
        </div>
    );
};

export default Tracking;
