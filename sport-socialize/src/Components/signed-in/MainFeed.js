import React from 'react';
import styled from 'styled-components';
// Have to change user-pic class to unique ID of the user
const MainFeedWrapper = styled.div`
  display: block;
  .post {
    margin: 5px;
    padding: 10px;
    border: 7px solid #172a08;
    border-radius: 15px;
    width: 75%;
  }
  .user-pic {
    border-radius: 100%;
  }
  .user-info {
    background: #e1f9cd;
    border: 7px solid #172a08;
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 10px;
  }

  h3 {
    display: inline;
    margin: 5px;
    padding: 15px;
    font-weight: bold;
  }
`;

const MainFeed = () => {
  return (
    <MainFeedWrapper>
      <div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('./imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Petar Georgiev Georgiev</h3>
          </div>
          <h4>Post: Mike Tyson fighting</h4>
          <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" />
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('./imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Petar Georgiev Georgiev</h3>
          </div>
          <h4>Post: Mike Tyson fighting</h4>
          <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" />
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('./imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Petar Georgiev Georgiev</h3>
          </div>
          <h4>Post: Tyson Fury fighting</h4>
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" />
        </div>
      </div>
    </MainFeedWrapper>
  );
};

export default MainFeed;
