import React from 'react';
import RegularMessage from './RegularMessage';
import PriorityMessage from './PriorityMessage';
import styled from 'styled-components';

const MessagesWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  button {
    display: inline;
    font-weight: bold;
    width: 100%;
    color: white;
    background-color: #234806;
    margin: 5px;
    border: 7px solid #172a08;
    border-radius: 5px;
    :hover {
      background-color: green;
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
