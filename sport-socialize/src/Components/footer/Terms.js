import React from 'react';
import styled from 'styled-components';

const TermsWrapper = styled.button`
  grid-column: 2;
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

const Terms = () => {
  return <TermsWrapper>Terms & Agreements</TermsWrapper>;
};

export default Terms;
