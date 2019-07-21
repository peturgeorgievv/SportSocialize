import React from 'react';
import styled from 'styled-components';

const SubscribersWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  text-align: left;
  padding: 5px;
  margin: 15px;
  img {
    border-radius: 100%;
    padding: 5px;
  }
  h3 {
    text-align: center;
    font-weight: bold;
    border-bottom: 4px solid #81b622;
  }
  li {
    border-bottom: 1px solid #81b622;
    border-right: 1px solid #81b622;
  }
  #names {
    grid-column: 1;
  }
  #since {
    grid-column: 2;
  }
  #actions {
    grid-column: 3;
  }
`;

const Subscribers = () => {
  const user1 = 'Georgi Petrov Petrov';
  const user2 = 'Elena Georgieva Georgieva';
  return (
    <SubscribersWrapper>
      <div id="names">
        <h3>Names</h3>
        <ol>
          <li>
            <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" />
            {user1}
          </li>
          <li>
            <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" />
            {user2}
          </li>
        </ol>
      </div>
      <div id="since">
        <h3>Since</h3>
      </div>
      <div id="actions">
        <h3>Actions</h3>
      </div>
    </SubscribersWrapper>
  );
};

export default Subscribers;
