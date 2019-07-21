import React from 'react';
import Videos from './Videos';
import Photos from './Photos';
import styled from 'styled-components';

const MediaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    float: right;
    font-weight: bold;
    width: 100px;
    color: white;
    margin: 5px;
    background-color: #116530;
    border-radius: 10px;
    :hover {
      background-color: #00a300;
    }
    #videos {
      grid-column: 1;
    }
    #photos {
      grid-column: 2;
    }
  }
`;

const Media = () => {
  return (
    <MediaWrapper>
      <Videos id="videos" />
      <Photos id="photos" />
    </MediaWrapper>
  );
};

export default Media;
