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
    <ul class="collection">
    <li class="collection-item avatar">
      <img 
        className="responsive-img circle"
        src={require('../imgs/profil-pic-post.jpg')} 
        alt=""
      />
      <span class="title">{userName1}</span>
      <p>{chatMessage1}</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
    <img 
        className="responsive-img circle"
        src={require('../imgs/profil-pic-post.jpg')}
        alt="profile-pic-user"
      />
      <span class="title">{userName2}</span>
      <p>{chatMessage2}</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
    <img 
        className="responsive-img circle"
        src={require('../imgs/profil-pic-post.jpg')}
        alt="profile-pic-user"
      />
      <span class="title">{userName3}</span>
      <p>{chatMessage3}</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </ul>
</div>
  );
};

export default MessageFeed;
