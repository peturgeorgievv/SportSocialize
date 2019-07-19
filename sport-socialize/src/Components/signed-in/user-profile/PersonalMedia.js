import React from 'react';
import styled from 'styled-components';

const PersonalMediaWrapper = styled.div`
  width: 65%;
  margin: 10px;
  float: left;
  border: 7px solid #172a08;
  border-radius: 5px;
`;

const PersonalMedia = () => {
  return (
    <PersonalMediaWrapper>
      <div>Pictures or Videos, or whatever is clicked on the side menu</div>
    </PersonalMediaWrapper>
  );
};

export default PersonalMedia;
