import React from 'react';
import Header from '../signed-in/Header';
import Media from './Media';
import MainFeed from './MainFeed';

const SignedIn = () => {
  return (
    <div>
      <Header />
      <Media />
      <MainFeed />
    </div>
  );
};

export default SignedIn;
