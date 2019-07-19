import React from 'react';
import styled from 'styled-components';

const PriorityWrapper = styled.div`
  width: 47%;
  display: inline-block;
  margin: 10px;
`;

const PriorityMessage = () => {
  return (
    <PriorityWrapper>
      <div>
        <h3>
          <button>Priority Messages</button>
        </h3>
      </div>
    </PriorityWrapper>
  );
};

export default PriorityMessage;
