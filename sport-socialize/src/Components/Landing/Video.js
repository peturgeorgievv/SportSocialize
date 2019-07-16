import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  padding: 20px;
  margin: 30px;
  display: inline-block;
`;

const Video = () => {
  return (
    <VideoWrapper>
      <div>
        <img src={require('./imgs/video.png')} alt="video" />
      </div>
    </VideoWrapper>
  );
};

export default Video;
