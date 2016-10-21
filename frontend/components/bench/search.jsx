import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';


class Search extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { benches } = this.props
    return(
      <div>
        <BenchMap benches={benches}/>
        <BenchIndex benches={benches} requestBenches={this.props.requestBenches}/>
      </div>
    );
  };
};

// const Search = ({benches}) => (
//   <div>
//     <BenchMap benches={benches}/>
//     <BenchIndex benches={benches}/>
//   </div>
// );

export default Search;
