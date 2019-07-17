import React from 'react';
import Header from '../signed-in/Header';
import Media from './Media';
import styled from 'styled-components';
import MainFeed from './MainFeed';

const SignedInWrapper = styled.div`
  padding-top: 55px;
`;

const SignedIn = () => {
  return (
    <SignedInWrapper>
      <div>
        <Header />
        <Media />
        <MainFeed />
      </div>
    </SignedInWrapper>
  );
};

export default SignedIn;
