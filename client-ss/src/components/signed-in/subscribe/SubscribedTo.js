import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const SubscribedTo = () => {
  return (
    <div>
      <Header />
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <Link subscribers to="/logged/user/subscriptions" class="btn btn-primary btn-lg">
              Subscribers
          </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <Link id="subscribed" to="/logged/user/subscribed" class="btn btn-primary btn-lg">
              Subscribed To
          </Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubscribedTo;