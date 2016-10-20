import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { requestBenches } from '../../actions/bench_actions'

const mapStateToProps = state => ({
  bench: state.bench
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

const BenchIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);

export default BenchIndexContainer;
