import React from 'react';
import Header from '../Header';
import Media from './Media';
import MainFeed from './MainFeed';
import $http from '../../api/users';

class SignedIn extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await $http.get('/api/users')
    this.setState({ data: response.data });
  }

  render() {
    return (
      <div>
        <Media />
        <MainFeed />
      </div>
    );
  }
};

export default SignedIn;
