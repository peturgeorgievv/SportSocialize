import React from 'react';
import styled from 'styled-components';

const ContactsWrapper = styled.button`
  grid-column: 1;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: #116530;
  border-radius: 10px;
  :hover {
    background-color: #00a300;
  }
`;

const Contacts = () => {
  return <ContactsWrapper>Contacts</ContactsWrapper>;
};

export default Contacts;
