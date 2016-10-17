import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors,
  loggedIn: !!state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  var processForm;
  if(formType === "/signup") {
    processForm = signup;
  } else {
    processForm = login;
  }
  console.log(processForm);
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  }
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionFormContainer;
