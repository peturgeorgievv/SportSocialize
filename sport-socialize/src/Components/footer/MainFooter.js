import React from 'react';
import Contacts from './Contacts';
import Terms from './Terms';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const MainFooter = () => {
  return (
    <FooterWrapper>
      <div>
        <Contacts />
        <Terms />
      </div>
    </FooterWrapper>
  );
};

export default MainFooter;
