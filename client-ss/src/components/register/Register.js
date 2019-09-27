import React from 'react';
import Header from '../landing/Header';
import $http from '../../api/users';
import M from "materialize-css";


class Register extends React.Component {
  state = { 
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    activity: "Boxing",
    accountType: "Manager",
 };

 componentDidMount() {
  // Auto initialize all the things!
  M.AutoInit();
}

 onUsernameChange = event => {
  this.setState({ username: event.target.value });
};

onFirstNameChange = event => {
  this.setState({ firstName: event.target.value });
};

onLastNameChange = event => {
  this.setState({ lastName: event.target.value });
};

onEmailChange = event => {
  this.setState({ email: event.target.value });
};

onPasswordChange = event => {
  this.setState({ password: event.target.value });
};

onPasswordReChange = event => {
  this.setState({ passwordRepeat: event.target.value });
};

onActivityChange = event => {
  this.setState({ activity: event.target.value });
};

onAccountTypeChange = event => {
  this.setState({ accountType: event.target.value });
};

  onFormSubmit = event => {
    $http.post('/api/users', {
      username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        activity: this.state.activity,
        accountType: this.state.accountType,
    }).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error);
        })
  };

  render() {
    return (
      <div>
        <Header />
          <form onSubmit={this.onFormSubmit} className="container">
            <div>
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>

              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.onUsernameChange}
                required
              />

              <label>
                <b>First Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
                required
              />

              <label>
                <b>Last Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={this.state.lastName}
                onChange={this.onLastNameChange}
                required
              />

              <label>
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.onEmailChange}
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
                required
              />

              <label>
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                value={this.state.passwordRepeat}
                onChange={this.onPasswordReChange}
                required
              />
              <label>
                <b>Activity (Sport) </b>
              </label>
              <br />
              <select name="activity-sport" onChange={this.onActivityChange}>
                <option value="Boxing">Boxing</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <br />

              <label>
                <b>Type of Account</b>
              </label>
              <br />
              <select name="account-type" onChange={this.onAccountTypeChange}>
                <option value="Manager">Manager</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <p>
                By creating an account you agree to our{' '}
                <a href="#!">Terms & Privacy</a>.
              </p>
              <button type="submit" className="btn-small">
                Register
              </button>
            </div>

            <div>
              <p>
                Already have an account? <a href="#!">Sign in</a>.
              </p>
            </div>
          </form>
      </div>
    );
  }
};

export default Register;
