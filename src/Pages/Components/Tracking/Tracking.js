import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Tracking.css';
import ShipmentEntry from './ShipmentEntry/ShipmentEntry';
import ShipmentDescription from './ShipmentDescription/ShipmentDescription';

class Tracking extends Component {
  state = {
    trackingnumber: [ 
      {number: "001", time: new Date('2021-03-03'), location: 'Moscow', status: 'final'},
      {number: "001", time: new Date('2021-03-02'), location: 'Zwenigorod', status: ''},
      {number: "001", time: new Date('2021-03-01'), location: 'Irkutsk', status: ''},
      {number: "001", time: new Date('2021-03-01'), location: 'Beijing', status: 'first'},
      {number: "002", time: new Date('2021-03-03'), location: 'Rotterdam', status: 'final'},
      {number: "002", time: new Date('2021-03-02'), location: 'Murmansk', status: ''},
      {number: "002", time: new Date('2021-03-01'), location: 'Dudinka', status: ''},
      {number: "002", time: new Date('2021-03-01'), location: 'Norilsk', status: 'first'}
    ],
    hasBeenSearched: false
  };

  TrackingStatusHandler = (event) => {
    if (this.state.trackingnumber.some(e => e.number === event.target.value)) {
      const arrayNumber = this.state.trackingnumber.filter(e => e.number === event.target.value)
      console.log(arrayNumber)
      this.setState({
        hasBeenSearched: true,
        trackingnumber: arrayNumber
      })
    } else {
      this.setState({
        hasBeenSearched: false,
        trackingnumber: [
          {number: "001", time: new Date('2021-03-03'), location: 'Moscow', status: 'final'},
          {number: "001", time: new Date('2021-03-02'), location: 'Zwenigorod', status: ''},
          {number: "001", time: new Date('2021-03-01'), location: 'Irkutsk', status: ''},
          {number: "001", time: new Date('2021-03-01'), location: 'Beijing', status: 'first'},
          {number: "002", time: new Date('2021-03-03'), location: 'Rotterdam', status: 'final'},
          {number: "002", time: new Date('2021-03-02'), location: 'Murmansk', status: ''},
          {number: "002", time: new Date('2021-03-01'), location: 'Dudinka', status: ''},
          {number: "002", time: new Date('2021-03-01'), location: 'Norilsk', status: 'first'}
        ]
      })}
  };

  ShowTracking =() => {
    return (
      <div>
        <br/>
        {this.state.trackingnumber.map((n, index) => (
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

  render(){
      return (
        <div className="tracking_area">
            <InputGroup className="shipment-input" onChange={event => this.TrackingStatusHandler(event)}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Введите трек-номер</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="With textarea" />
            </InputGroup>
            {this.state.hasBeenSearched ? 
              <ShipmentDescription status={this.state.trackingnumber[0].status} number={this.state.trackingnumber[0].number}/>
              : <div></div>
            } 
            {this.state.hasBeenSearched ? <this.ShowTracking /> : <div></div>}             
        </div>
    )
  }
  
};

export default Tracking