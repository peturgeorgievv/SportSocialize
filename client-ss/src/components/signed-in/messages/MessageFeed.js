import React from 'react';

const MessageFeed = () => {
  const userName1 = 'Petar Georgiev Georgiev';
  const userName2 = 'Petar Georgiev Georgiev';
  const userName3 = 'Petar Georgiev Georgiev';
  const chatMessage1 = 'Messaging this guy';
  const chatMessage2 = 'Well this is some msg...';
  const chatMessage3 = 'Well this is some msg...';
  const msgRegular = 'Regular'
  const msgPriority = 'Priority'
  return (
    <div className="container">
      <div className="media">
        <img src={require('../imgs/profil-pic-post.jpg')} className="mr-3 img-fluid rounded" alt="..." />
        <div className="media-body">
          <h5 className="mt-0">{userName1} <span class="badge badge-primary">{msgRegular}</span></h5>
          {chatMessage1}
        </div>
      </div><br />

      <div className="media">
        <img src={require('../imgs/profil-pic-post.jpg')} className="mr-3 img-fluid rounded" alt="..." />
        <div className="media-body">
          <h5 className="mt-0">{userName2} <span class="badge badge-danger">{msgPriority}</span></h5>
          {chatMessage2}
        </div>
      </div><br />

      <div className="media">
        <img src={require('../imgs/profil-pic-post.jpg')} className="mr-3 img-fluid rounded" alt="..." />
        <div className="media-body">
          <h5 className="mt-0">{userName3} <span class="badge badge-danger">{msgPriority}</span></h5>
          {chatMessage3}
        </div>
      </div><br />
    </div>
  );
};

export default MessageFeed;
