import React from 'react';
import Videos from './Videos';
import Photos from './Photos';
import styled from 'styled-components';

const MediaWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  button {
    float: right;
    font-weight: bold;
    width: 100px;
    color: white;
    background-color: #234806;
    margin: 5px;
    border-radius: 10px;
    :hover {
      background-color: green;
    }
  }
`;

const Media = () => {
  return (
    <MediaWrapper>
      <div>
        <Videos />
        <Photos />
      </div>
    </MediaWrapper>
  );
};

export default Media;
