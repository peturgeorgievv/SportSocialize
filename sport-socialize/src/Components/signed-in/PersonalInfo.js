import React from 'react';
import styled from 'styled-components';

const PersonalInfoWrapper = styled.div`
  width: 20%;
  margin: 10px;
  border: 7px solid #172a08;
  border-radius: 5px;
  float: left;
`;

const PersonalInfo = () => {
  return (
    <PersonalInfoWrapper>
      <div>
        Here will be some information about you <br />I am striving to become a
        Professional Athlete... etc
      </div>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;
