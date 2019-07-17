import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Register from './register/Register';
import ForgPassword from './register/ForgPassword';
import Login from '../components/landing/Login';
import SignedIn from '../components/signed-in/SignedIn';
import Messages from '../components/signed-in/Messages';
import UserProfile from '../components/signed-in/UserProfile';
import styled from 'styled-components';

const FullPage = styled.div`
  background: #d5feb3;
  margin-top: 6%;
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
          <Route exact path="/messages" component={Messages} />
        </div>
      </BrowserRouter>
    </FullPage>
  );
};

export default App;
