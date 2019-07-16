import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Landing/Header';
import Landing from '../components/Landing/Landing';
import Messages from '../components/Messages';
import Register from '../components/Register/Register';
import ForgPassword from '../components/Register/ForgPassword';
import Login from '../components/Landing/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgpassword" component={ForgPassword} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
