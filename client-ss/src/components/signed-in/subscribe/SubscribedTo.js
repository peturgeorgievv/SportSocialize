import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubscribedToWrapper = styled.div`
  text-align: center;
  padding: 5px;
`;

const SubscribedTo = () => {
  return (
    <div>
      <Header />
      <SubscribedToWrapper>
        <h2>
          <Link subscribers to="/logged/user/subscriptions">
            Subscribers
          </Link>
          {' / '}
          <Link id="subscribed" to="/logged/user/subscribed">
            Subscribed To
          </Link>{' '}
        </h2>
        SubscribedTo
      </SubscribedToWrapper>
    </div>
  );
};

export default SubscribedTo;
