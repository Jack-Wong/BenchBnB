import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props)
  };

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    // this.MarkerManager = MarkerManager(this.map);
  }

  render() {
    return(
      <div className='map-container' ref='map'>
      </div>
    );
  };
};

export default BenchMap;
