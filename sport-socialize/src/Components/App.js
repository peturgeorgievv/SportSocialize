import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/landing/Header';
import Landing from '../components/landing/Landing';
import Register from './register/Register';
import ForgPassword from './register/ForgPassword';
import Login from '../components/landing/Login';
import SignedIn from '../components/signed-in/SignedIn';
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
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgpassword" component={ForgPassword} />
          <Route exact path="/logged" component={SignedIn} />
        </div>
      </BrowserRouter>
    </FullPage>
  );
};

export default App;
