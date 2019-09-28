import React from 'react';
import Header from '../signed-in/Header';
import $http from '../../api/users';
import { withRouter } from 'react-router-dom';



class Login extends React.Component {
  state = {
    username: "",
    password: "",
    isLogged: false,
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
    this.setState({ isLogged: true });
    this.props.history.push('/logged');
  };



  render() {


    return (
      <div>
        <Header />
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
