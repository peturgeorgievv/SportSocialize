import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Have to change user-pic class to unique ID of the user
const MainFeedWrapper = styled.div`
  display: block;
  .post {
    margin: 5px;
    padding: 10px;
    border: 4px solid #81b622;
    border-radius: 5px;
    width: 75%;
  }
  .user-pic {
    border-radius: 100%;
  }
  .user-info {
    background: #e1f9cd;
    border: 4px solid #81b622;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }

  .profile-link {
    display: inline;
    margin: 5px;
    padding: 15px;
    font-weight: bold;
    font-size: x-large;
    color: black;
  }
  .profile-link:hover {
    color: #4169e1;
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
            <Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
            </Link>
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
            <Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
            </Link>
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
            <Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
            </Link>
          </div>
          <h4>Post: Tyson Fury fighting</h4>
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" />
        </div>
      </div>
    </MainFeedWrapper>
  );
};

export default MainFeed;
