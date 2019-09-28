import React from 'react';
import Header from '../signed-in/Header';
import Video from './Video';
import SideMenu from './SideMenu';

const Landing = () => {
  return (
    <div>
      <Header />
      <Video />
      <SideMenu />
    </div>
  );
};

export default Landing;
