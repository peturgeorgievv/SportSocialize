import React from 'react';
import styled from 'styled-components';

const MessagesFeedWraper = styled.div`
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

const MessageFeed = () => {
  return (
    <MessagesFeedWraper>
      <div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('../imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Petar Georgiev Georgiev</h3>
          </div>
          <h4>Messaging this guy</h4>
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('../imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Some Guy</h3>
          </div>
          <h4>Well this is some msg...</h4>
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('../imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>Angry Guy Ivanov</h3>
          </div>
          <h4>This guy stole my Profile Picture</h4>
        </div>
      </div>
    </MessagesFeedWraper>
  );
};

export default MessageFeed;
