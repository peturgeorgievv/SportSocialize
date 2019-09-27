import React from 'react';
import Header from '../Header';
import Media from '../Media';
import PersonalInfo from './PersonalInfo';
import PersonalMedia from './PersonalMedia';
import SideMenu from './SideMenu';
import styled from 'styled-components';
import $http from '../../../api/users';

const UserFeed = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  margin: 15px;
`;

class UserProfile extends React.Component {
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
        <UserFeed>
          <PersonalMedia />
          <PersonalInfo />
          <SideMenu />
        </UserFeed>
      </div>
    );
  }
};

export default UserProfile;
