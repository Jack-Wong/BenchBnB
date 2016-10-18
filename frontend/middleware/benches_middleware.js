import { BenchConstants } from '../actions/bench_actions';
import { requestBenches } from '../actions/bench_actions';
import { receiveBenches } from '../actions/bench_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case BenchConstants.REQUEST_BENCHES:
      console.log("time to fetch!")
      return next(action)
    default:
    return next(action);
  }
}

export default BenchesMiddleware;
