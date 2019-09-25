import React from 'react';
import styled from 'styled-components';

const VideosWrapper = styled.div`
  margin: 10px;
  display: inline-block;
  border: 4px solid #81b622;
  border-radius: 5px;
  #all-videos {
    float: left;
    width: 80%;
  }
`;

const Videos = () => {
  return (
    <VideosWrapper>
      <div>
        <button id="all-videos">All Videos</button>
        <button>Category</button>
      </div>
    </VideosWrapper>
  );
};

export default Videos;
