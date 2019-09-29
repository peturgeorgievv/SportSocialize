import React from 'react';
import Header from '../Header';
import $http from '../../api/users';


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
        <form className="needs-validation container" novalidate onSubmit={this.onFormSubmit}>
          <div className="form-group row">
            <div className="col-md-4 mb-3">
              <label for="validationCustom01">Username</label>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="validationCustom01" value={this.state.username}
                onChange={this.onUsernameChange}
                required />
              <div className="valid-feedback">
                Looks good!
      </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom02">First name</label>
              <input type="text" className="form-control" placeholder="First Name" aria-label="FirstName" aria-describedby="basic-addon1" id="validationCustom02" value={this.state.firstName}
                onChange={this.onFirstNameChange}
                required />
              <div className="valid-feedback">
                Looks good!
      </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustomUsername">Last Name</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Last Name" aria-label="LastName" aria-describedby="basic-addon1" value={this.state.lastName}
                  onChange={this.onLastNameChange}
                  required />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 mb-3">
              <label for="validationCustom03">E-mail</label>
              <input type="text" className="form-control" id="validationCustom03" placeholder="E-mail" aria-label="Email" aria-describedby="basic-addon1" value={this.state.email}
                onChange={this.onEmailChange}
                required />
            </div>

            <div className="col-md-3 mb-3">
              <label for="validationCustom04">Password</label>
              <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password}
                onChange={this.onPasswordChange}
                required />
            </div>



            <div className="col-md-3 mb-3">
              <label for="validationCustom04">Repeat Password</label>
              <input type="password" className="form-control" placeholder="Repeat Password" aria-label="RePassword" aria-describedby="basic-addon1" value={this.state.passwordRepeat}
                onChange={this.onPasswordReChange}
                required />
            </div>

            <label>
              <b>Activity (Sport) </b>
            </label>
            <br />
            <select className="custom-select" name="activity-sport" onChange={this.onActivityChange}>
              <option value="Boxing">Boxing</option>
              <option value="2">2</option>
            </select>
            <br />

            <label>
              <b>Type of Account</b>
            </label>
            <br />
            <select className="custom-select" name="account-type" onChange={this.onAccountTypeChange}>
              <option value="Manager">Manager</option>
              <option value="2">2</option>
            </select>

          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
      </label>
              <div className="invalid-feedback">
                You must agree before submitting.
      </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>

        </form>
        <br />
      </div >
    );
  }
};

export default Register;
