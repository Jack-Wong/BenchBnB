import { SessionConstants } from '../actions/session_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import { receiveErrors } from '../actions/session_actions';
import { login } from '../util/session_api_util';
import { logout } from '../util/session_api_util';
import { signup } from '../util/session_api_util';

const SessionMiddleware =({ getState, dispatch }) => next => action => {
  const successCallback = user => disptach(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))

  switch(action.type) {
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
