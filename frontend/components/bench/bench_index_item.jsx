import React from 'react';
import { hashHistory } from 'react-router';

class BenchIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  handleClick() {
    hashHistory.push('benches/' + this.props.benches.id)
  }

  render() {
    const { benches } = this.props;
    return(
      <li onClick={this.handleClick}>
        <span>{benches.id}</span>
        <img src={benches.picture_url} alt={benches.name}/>
        <span>{benches.name}</span>
        <span>Description: </span>
        <span>{this.props.benches.description}</span>
      </li>
    );
  };
};

export default BenchIndexItem;
