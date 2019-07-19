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
    background-color: #234806;
    margin: 5px;
    border-radius: 10px;
    :hover {
      background-color: green;
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
