import React from 'react';
import RegularMessage from './RegularMessage';
import PriorityMessage from './PriorityMessage';

const MessageType = () => {
  return (
    <div>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <RegularMessage />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <PriorityMessage />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MessageType;
