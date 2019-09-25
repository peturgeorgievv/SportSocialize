import React from 'react';
import Header from '../Header';
import MessageType from './MessageType';
import MessageFeed from './MessageFeed';

const Messages = () => {
  return (
    <div>
      <Header />
      <MessageType />
      <MessageFeed />
    </div>
  );
};

export default Messages;
