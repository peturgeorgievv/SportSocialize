import React from 'react';
import Contacts from './Contacts';
import Terms from './Terms';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px;
  padding: 5px;
  border: 4px solid #81b622;
  border-radius: 5px;
`;

const MainFooter = () => {
  return (
    <FooterWrapper>
      <Contacts />
      <Terms />
    </FooterWrapper>
  );
};

export default MainFooter;
