import React from 'react';
import styled from 'styled-components';

const PersonalInfoWrapper = styled.div`
  margin: 5px;

  grid-column: 2;
`;

const PersonalInfo = () => {
  return (
    <PersonalInfoWrapper>
      <div>
        <h4>Proffesional Fitness-Trainer</h4>
        <ul>
          <li>Finished university for dieting</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
          <li>Certificate about suplementing</li>
        </ul>
      </div>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;
