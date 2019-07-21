import React from 'react';
import RegularMessage from './RegularMessage';
import PriorityMessage from './PriorityMessage';
import styled from 'styled-components';

const MessagesWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  button {
    display: block;
    font-weight: bold;
    width: 100%;
    color: white;
    background-color: #116530;
    border-radius: 10px;
    :hover {
      background-color: #00a300;
    }
  }
`;

const MessageType = () => {
  return (
    <MessagesWrapper>
      <div>
        <RegularMessage />
        <PriorityMessage />
      </div>
    </MessagesWrapper>
  );
};

export default MessageType;
