import React from 'react';
import { hashHistory } from 'react-router';

class BenchIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  handleClick() {
    hashHistory.push('benches/' + this.props.bench.id)
  }

  render() {
    const { bench } = this.props;
    return(
      <li onClick={this.handleClick}>
        <span>{bench.id}</span>
        <img src={bench.picture_url} alt={bench.name}/>
        <span>{bench.name}</span>
        <span>Description: </span>
        <span>{this.props.bench.description}</span>
      </li>
    );
  };
};

export default BenchIndexItem;
