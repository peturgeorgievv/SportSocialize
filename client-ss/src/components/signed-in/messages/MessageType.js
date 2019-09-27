import React from 'react';
import RegularMessage from './RegularMessage';
import PriorityMessage from './PriorityMessage';

const MessageType = () => {
  return (
      <div className="row container">
        <RegularMessage />
        <PriorityMessage />
      </div>
  );
};

export default MessageType;
