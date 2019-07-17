import React from 'react';
import Header from './Header';
import MessageType from './MessageType';
import MessageFeed from './MessageFeed';
import styled from 'styled-components';

const MessagesWrapper = styled.div`
  padding-top: 55px;
`;

const Messages = () => {
  return (
    <MessagesWrapper>
      <div>
        <Header />
        <MessageType />
        <MessageFeed />
      </div>
    </MessagesWrapper>
  );
};

export default Messages;
