import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillUpdate(){
    if(this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  update(key){
    return event => this.setState({[key]: event.target.value});
  };

  handleSubmit(event) {
    return event => {
      event.preventDefault();
      const user = this.state;
      this.props.processForm(user);
    }
  }

  reverseType(formType) {
    if(formType === "/login"){
      return <Link to="/signup">Sign Up</Link>
    } else {
      return <Link to="/login">Log In</Link>
    }
  }

  errorMessages() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit()}>
          <h1>Welcome to Bench BnB</h1>
          Please {this.props.formType.slice(1)} or {this.reverseType(this.props.formType)}
          {this.errorMessages()}
          <input type="text" value={this.state.username} placeholder="Username" onChange={this.update("username")}/>
          <input type="text" value={this.state.password} placeholder="Password" onChange={this.update("password")}/>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    );
  };
};

export default SessionForm;
