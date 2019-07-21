import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import Subscribers from './Subscribers';
import { Link } from 'react-router-dom';

const SubscriptionsWrapper = styled.div`
  text-align: center;
  padding: 5px;
`;

const Subscriptions = () => {
  return (
    <div>
      <Header />
      <SubscriptionsWrapper>
        <h2>
          <Link subscribers to="/logged/user/subscriptions">
            Subscribers
          </Link>
          {' / '}
          <Link id="subscribed" to="/logged/user/subscribed">
            Subscribed To
          </Link>{' '}
        </h2>
        <Subscribers />
      </SubscriptionsWrapper>
    </div>
  );
};

export default Subscriptions;
