import React from 'react';
import Header from '../signed-in/Header';
import Media from './Media';
import MainFeed from './MainFeed';
import $http from '../../api/users';

class SignedIn extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await $http.get('/api/users/94c583ae-9c90-4b5e-b139-b3dcb3f85d2d')
    this.setState({ data: response.data });
  }

  render() {
    return (
      <div>
        <Header 
          firstName={this.state.data.firstName}
          lastName={this.state.data.lastName}
        />
        <Media />
        <MainFeed />
      </div>
    );
  }
};

export default SignedIn;
