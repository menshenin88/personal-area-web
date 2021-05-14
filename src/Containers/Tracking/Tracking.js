import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Tracking.css";
import ShipmentDescription from "../../Components/Tracking/ShipmentDescription/ShipmentDescription";
import GetTracking from "../../Services/GetTracking/GetTracking";
import TrackingHistory from "../../Components/Tracking/TrackingHistory/TrackingHistory";
import debounce from 'lodash.debounce'

class Tracking extends Component {
  state = {
    hasBeenSearched: false,
    searching: false,
    onSearch: true,
    trackingdata: {},
  };

  componentDidMount() {
    document.title = "Tracking";
  }

  addNumberHandler = (data) => {
    this.props.onNumberAdd(data);
  };

  TrackingHandler = async (event) => {
    if (event.target.value.trim().length > 0 ) {
      const tracker = await GetTracking(event.target.value.trim()).then(response => response)
      console.log(tracker)
      if (tracker) {
        this.setState({
          trackingdata: tracker,
          hasBeenSearched: true,
          searching: false,
        });
      } else {
        this.setState({
          trackingdata: {},
          hasBeenSearched: false,
          searching: true,
        });
      }
    } else {
      this.setState({
        searching: false
      })
    }
    
  };

  render() {
    const { trackingdata, searching, hasBeenSearched, onSearch } = this.state
    return (
      <div className="tracking_area">
        <InputGroup
          className="shipment-input"
          onChange={debounce((event) => {
            this.TrackingHandler(event);
          }, 1000)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>Введите трек-номер</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="With textarea" />
        </InputGroup>
        {this.state.hasBeenSearched && (
          <ShipmentDescription
            onNumberAdd={this.addNumberHandler}
            details={trackingdata.trackingNumber}
            location={trackingdata.trackingHistory[0].opLocation}
            status={trackingdata.trackingHistory[0].status}
            number={trackingdata.trackingNumber}
            tax="paid"
            time={trackingdata.trackingHistory[0].opTime}
            onSearch={onSearch}
          />
        )}
        {searching && (
          <p className="tracking-message">
            По данному трек-номеру ничего не найдено
          </p>
        )}
        {hasBeenSearched && <TrackingHistory trackingdata={trackingdata} />}
      </div>
    );
  }
}

export default Tracking; 
