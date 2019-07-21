import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PersonalMediaWrapper = styled.div`
  margin: 10px;
  border: 4px solid #81b622;
  border-radius: 5px;
  grid-column: 1;
  ul {
    list-style-type: none;
    padding: 0px;
  }

  .post {
    margin: 25px 10px 25px 10px;
    padding: 10px;
    border-bottom: 4px solid #81b622;
  }
  .user-pic {
    border-radius: 100%;
  }
  .user-info {
    background: #e1f9cd;
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

const PersonalMedia = () => {
  return (
    <PersonalMediaWrapper>
      <ul>
        <li>
          <div className="post">
            <div className="user-info">
              <img
                className="user-pic"
                src={require('../imgs/profil-pic-post.jpg')}
                alt="profile-pic-user"
              />
              <Link className="profile-link" to="/logged/user">
                Petar Georgiev Georgiev
              </Link>
            </div>
            <h4>Post: Mike Tyson fighting</h4>
            <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
          </div>
        </li>

        <li>
          <div className="post">
            <div className="user-info">
              <img
                className="user-pic"
                src={require('../imgs/profil-pic-post.jpg')}
                alt="profile-pic-user"
              />
              <Link className="profile-link" to="/logged/user">
                Petar Georgiev Georgiev
              </Link>
            </div>
            <h4>Post: Mike Tyson fighting</h4>
            <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
          </div>
        </li>

        <li>
          <div className="post">
            <div className="user-info">
              <img
                className="user-pic"
                src={require('../imgs/profil-pic-post.jpg')}
                alt="profile-pic-user"
              />
              <Link className="profile-link" to="/logged/user">
                Petar Georgiev Georgiev
              </Link>
            </div>
            <h4>Post: Mike Tyson fighting</h4>
            <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
          </div>
        </li>
      </ul>
    </PersonalMediaWrapper>
  );
};

export default PersonalMedia;
