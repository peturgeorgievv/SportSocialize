import React from 'react';
import Header from '../Header';
import Media from '../Media';
import PersonalInfo from './PersonalInfo';
import PersonalMedia from './PersonalMedia';
import SideMenu from './SideMenu';

const UserProfile = () => {
  return (
    <div>
      <Header />
      <Media />
      <PersonalMedia />
      <PersonalInfo />
      <SideMenu />
    </div>
  );
};

export default UserProfile;
