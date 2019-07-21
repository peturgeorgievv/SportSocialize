import React from 'react';
import styled from 'styled-components';

const VideosWrapper = styled.div`
  margin: 10px;
  display: inline-block;
  border: 4px solid #81b622;
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
