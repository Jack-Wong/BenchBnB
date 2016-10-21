import React from 'react';
import BenchIndexItem from './bench_index_item';
import { fetchBenches } from '../../util/bench_api_util';

class BenchIndex extends React.Component {

  componentDidMount(){
    this.props.requestBenches()
  }

  render() {
    let bench_list;
    if(this.props.benches){
      bench_list = this.props.benches.map((bench, idx) => <BenchIndexItem bench={bench} key={idx}/>)
    };
    const { children } = this.props
    return(
      <section>
        <ul>
        {bench_list}
        </ul>
          {children}
      </section>
    );
  };
};

export default BenchIndex;
