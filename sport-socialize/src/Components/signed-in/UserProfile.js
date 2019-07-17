import React from 'react';
import Header from '../signed-in/Header';
import Media from './Media';
import PersonalInfo from './PersonalInfo';
import PersonalMedia from './PersonalMedia';
import styled from 'styled-components';
import SideMenu from './SideMenu';

const UserProfileWrapper = styled.div`
  padding-top: 55px;
  overflow: auto;
`;

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <div>
        <Header />
        <Media />
        <PersonalMedia />
        <PersonalInfo />
        <SideMenu />
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfile;
