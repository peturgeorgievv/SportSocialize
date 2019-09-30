import React from 'react';
import Media from './Media';
import MainFeed from './MainFeed';
import $http from '../../api/users';

class SignedIn extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const token = localStorage.getItem('currentUser');
    const response = await $http.get(`/api/users/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    this.setState({ data: response.data });
  }

  render() {
    return (
      <div>
        <Media />
        <MainFeed allPosts={this.state.data} />
      </div>
    );
  }
};

export default SignedIn;
