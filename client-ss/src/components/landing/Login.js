import React from 'react';
import $http from '../../api/users';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const request = await $http.post('/api/login', {
      username: this.state.username,
      password: this.state.password,
    })
    const response = await request.data.access_token;
    localStorage.setItem('currentUser', (response));

    this.props.history.push('/logged');
    window.location.reload(); // Have to remove later on!
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onUsernameChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
            required
          />
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    );
  }
};


export default withRouter(Login);
