import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Tracking.css';
import ShipmentEntry from './ShipmentEntry/ShipmentEntry';
import ShipmentDescription from './ShipmentDescription/ShipmentDescription';
import GetTracking from '../../Services/GetTracking/GetTracking';

class Tracking extends Component {
  state = {
    trackingnumber: [ 
      {number: "001", time: new Date('2021-03-03'), location: 'Moscow', status: 'final', tax: 'paid'},
      {number: "001", time: new Date('2021-03-02'), location: 'Zwenigorod', status: '', tax: 'paid'},
      {number: "001", time: new Date('2021-03-01'), location: 'Irkutsk', status: '', tax: 'paid'},
      {number: "001", time: new Date('2021-03-01'), location: 'Beijing', status: 'first', tax: 'paid'},
      {number: "002", time: new Date('2021-03-03'), location: 'Rotterdam', status: 'final', tax: ''},
      {number: "002", time: new Date('2021-03-02'), location: 'Murmansk', status: '', tax: ''},
      {number: "002", time: new Date('2021-03-01'), location: 'Dudinka', status: '', tax: ''},
      {number: "002", time: new Date('2021-03-01'), location: 'Norilsk', status: 'first', tax: ''}
    ],
    hasBeenSearched: false,
    searching: false,
    onSearch: true,
    trackingdata: []
  };

  componentDidMount() {
    document.title = 'Tracking';
  }

  TrackingStatusHandler = (event) => {
    if (this.state.trackingnumber.some(e => e.number === event.target.value)) {
      const arrayNumber = this.state.trackingnumber.filter(e => e.number === event.target.value)
      this.setState({
        hasBeenSearched: true,
        searching: false,
        trackingnumber: arrayNumber
      }
      )
    } else if (!this.state.trackingnumber.some(e => e.number === event.target.value) && (event.target.value)){
      console.log('hi')
      this.setState({
        hasBeenSearched: false,
        searching: true
      })
    } else {
      this.setState({
        hasBeenSearched: false,
        searching: false,
        trackingnumber: [
          {number: "001", time: new Date('2021-03-03'), location: 'Moscow', status: 'final', tax: 'paid'},
          {number: "001", time: new Date('2021-03-02'), location: 'Zwenigorod', status: '', tax: 'paid'},
          {number: "001", time: new Date('2021-03-01'), location: 'Irkutsk', status: '', tax: 'paid'},
          {number: "001", time: new Date('2021-03-01'), location: 'Beijing', status: 'first', tax: 'paid'},
          {number: "002", time: new Date('2021-03-03'), location: 'Rotterdam', status: 'final', tax: ''},
          {number: "002", time: new Date('2021-03-02'), location: 'Murmansk', status: '', tax: ''},
          {number: "002", time: new Date('2021-03-01'), location: 'Dudinka', status: '', tax: ''},
          {number: "002", time: new Date('2021-03-01'), location: 'Norilsk', status: 'first', tax: ''}
        ]
      })}; 
  };

  ShowTracking =() => {
    return (
      <div>
        {this.state.trackingdata.trackingHistory.map((n, index) => (
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
      </div>
    )
  };

  addNumberHandler = (data) => {
    this.props.onNumberAdd(data)
  };

  TrackingHandler = (event) => {
    if (GetTracking(event.target.value)) {
      const tracking = GetTracking(event.target.value);
      tracking.then(result => this.setState({
        trackingdata: result,
      }))
      tracking.then(result => {
        if (result) {
          this.setState({
            hasBeenSearched: true,
            searching: false
          })
        }
      })
      tracking.then(() => console.log(this.state.trackingdata))
    } else {
      this.setState({
        trackingdata:[],
        hasBeenSearched: false,
        searching: true
      })
    }
  };

  render(){
      return (
        <div className="tracking_area">
            <InputGroup className="shipment-input" onChange={event => {this.TrackingStatusHandler(event); this.TrackingHandler(event)}}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Введите трек-номер</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="With textarea" />
            </InputGroup>
            {this.state.hasBeenSearched ? 
              <ShipmentDescription 
                onNumberAdd={this.addNumberHandler}
                details={this.state.trackingnumber}
                location={this.state.trackingnumber[0].location}  
                status={this.state.trackingnumber[0].status} 
                number={this.state.trackingdata.trackingNumber}
                tax={this.state.trackingnumber[0].tax}
                time={this.state.trackingnumber[0].location} 
                onSearch={this.state.onSearch}
                />
            : <div></div>}
            {!this.state.hasBeenSearched && <p className="tracking-message">По данному трек-номеру ничего не найдено</p>}
            {this.state.hasBeenSearched && <this.ShowTracking /> }          
        </div>
    )
  };
  
};

export default Tracking