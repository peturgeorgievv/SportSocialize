import React from 'react';
import styled from 'styled-components';

const RegularWrapper = styled.div`
  width: 47%;
  display: inline-block;
  margin: 10px;
`;

const RegularMessage = () => {
  return (
    <RegularWrapper>
      <div>
        <h3>
          <button>Regular Messages</button>
        </h3>
      </div>
    </RegularWrapper>
  );
};

export default RegularMessage;
