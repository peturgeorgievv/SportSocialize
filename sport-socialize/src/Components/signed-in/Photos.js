import React from 'react';
import styled from 'styled-components';

const PhotosWrapper = styled.div`
  display: inline-block;
  margin: 10px;
  border: 7px solid #172a08;
  border-radius: 5px;
`;

const Photos = () => {
  return (
    <PhotosWrapper>
      <div>
        Photos
        <button>Category</button>
      </div>
    </PhotosWrapper>
  );
};

export default Photos;
