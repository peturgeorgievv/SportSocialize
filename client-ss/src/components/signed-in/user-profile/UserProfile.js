import React from 'react';
import Header from '../Header';
import Media from '../Media';
import PersonalInfo from './PersonalInfo';
import PersonalMedia from './PersonalMedia';
import SideMenu from './SideMenu';
import styled from 'styled-components';

const UserFeed = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  margin: 15px;
`;

const UserProfile = () => {
  return (
    <div>
      <Header />
      <Media />
      <UserFeed>
        <PersonalMedia />
        <PersonalInfo />
        <SideMenu />
      </UserFeed>
    </div>
  );
};

export default UserProfile;
