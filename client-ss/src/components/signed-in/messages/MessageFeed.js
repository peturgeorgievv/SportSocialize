import React from 'react';

const MessageFeed = () => {
  const userName1 = 'Petar Georgiev Georgiev';
  const userName2 = 'Petar Georgiev Georgiev';
  const userName3 = 'Petar Georgiev Georgiev';
  const chatMessage1 = 'Messaging this guy';
  const chatMessage2 = 'Well this is some msg...';
  const chatMessage3 = 'Well this is some msg...';
  return (
    <div className="container">
      <div class="media">
        <img src={require('../imgs/profil-pic-post.jpg')} class="mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">{userName1}</h5>
          {chatMessage1}
        </div>
      </div><br />

      <div class="media">
        <img src={require('../imgs/profil-pic-post.jpg')} class="mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">{userName2}</h5>
          {chatMessage2}
        </div>
      </div><br />

      <div class="media">
        <img src={require('../imgs/profil-pic-post.jpg')} class="mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">{userName3}</h5>
          {chatMessage3}
        </div>
      </div><br />
    </div>
  );
};

export default MessageFeed;
