import React from 'react';
import styled from 'styled-components';

const MessagesFeedWraper = styled.div`
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

  h3 {
    display: inline;
    margin: 5px;
    padding: 15px;
    font-weight: bold;
  }
`;

const MessageFeed = () => {
  const userName1 = 'Petar Georgiev Georgiev';
  const userName2 = 'Petar Georgiev Georgiev';
  const userName3 = 'Petar Georgiev Georgiev';
  const chatMessage1 = 'Messaging this guy';
  const chatMessage2 = 'Well this is some msg...';
  const chatMessage3 = 'Well this is some msg...';
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
            <h3>{userName1}</h3>
          </div>
          <h4>{chatMessage1}</h4>
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('../imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>{userName2}</h3>
          </div>
          <h4>{chatMessage2}</h4>
        </div>
        <div className="post">
          <div className="user-info">
            <img
              className="user-pic"
              src={require('../imgs/profil-pic-post.jpg')}
              alt="profile-pic-user"
            />
            <h3>{userName3}</h3>
          </div>
          <h4>{chatMessage3}</h4>
        </div>
      </div>
    </MessagesFeedWraper>
  );
};

export default MessageFeed;
