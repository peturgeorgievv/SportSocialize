import React from 'react';
import styled from 'styled-components';

const VideosWrapper = styled.div`
  width: 47%;
  margin: 10px;
  display: inline-block;
  border: 7px solid #172a08;
  border-radius: 5px;
`;

const Videos = () => {
  return (
    <VideosWrapper>
      <div>
        Videos
        <button>Category</button>
      </div>
    </VideosWrapper>
  );
};

export default Videos;
