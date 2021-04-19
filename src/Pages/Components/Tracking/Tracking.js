import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Tracking.css';
import ShipmentEntry from './ShipmentEntry/ShipmentEntry';

const Tracking = () => {
    const trackingnumber={
        trackings:
            [{number:"001", status:[
                {time: new Date('2021-03-03'), location: 'Moscow'},
                {time: new Date('2021-03-02'), location: 'Zwenigorod'},
                {time: new Date('2021-03-01'), location: 'Irkutsk'},
            ]
            },
            {number:"002", status:[
                {time: new Date('2021-04-07'), location: 'Moscow'},
                {time: new Date('2021-04-06'), location: 'Murmansk'},
                {time: new Date('2021-04-05'), location: 'Norilsk'},
            ]
            },
            {number:"003", status:[
                {time: new Date('2021-02-06'), location: 'Rotterdam'},
                {time: new Date('2021-02-05'), location: 'Zwenigorod'},
                {time: new Date('2021-02-04'), location: 'Irkutsk'},
            ]
            }
            ]
        };

    const TrackingStatusHandler = (event) => {
        function findNested(obj, key, value) {
            // Base case
            if (obj[key] === value) {
              return obj;
            } else {
              for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
                if (typeof obj[i] == 'object') {
                  var found = this.findNested(obj[i], key, value);
                  if (found) {
                    // If the object was found in the recursive call, bubble it up.
                    return found;
                  }
                }
              }
            }
          }

       return (console.log(findNested(trackingnumber, "number", "001")))
    };

    return (
        <div className="tracking_area">
            <InputGroup className="shipment-input" onChange={TrackingStatusHandler}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Введите трек-номер</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            <ShipmentEntry />
            <ShipmentEntry />
            <ShipmentEntry />
            <ShipmentEntry />
            
        </div>
    )
};

export default Tracking