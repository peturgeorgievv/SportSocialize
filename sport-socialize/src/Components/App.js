import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Register from './register/Register';
import ForgPassword from './register/ForgPassword';
import Login from '../components/landing/Login';
import SignedIn from '../components/signed-in/SignedIn';
import Messages from '../components/signed-in/messages/Messages';
import UserProfile from '../components/signed-in/user-profile/UserProfile';
import Friends from '../components/signed-in/friends/Friends';
import styled from 'styled-components';
import MainFooter from './footer/MainFooter';
import Settings from './signed-in/settings/Settings';
import Search from './signed-in/search/Search';

const FullPage = styled.div`
  background: #d5feb3;
`;

const App = () => {
  return (
    <FullPage>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgpassword" component={ForgPassword} />
          <Route exact path="/logged" component={SignedIn} />
          <Route exact path="/logged/user" component={UserProfile} />
          <Route exact path="/logged/friends" component={Friends} />
          <Route exact path="/logged/settings" component={Settings} />
          <Route exact path="/logged/search" component={Search} />
          <Route exact path="/logged/messages" component={Messages} />
        </div>
      </BrowserRouter>
      <MainFooter />
    </FullPage>
  );
};

export default App;
