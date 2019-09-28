import React from 'react';
import { Link } from 'react-router-dom';
// Have to change user-pic className to unique ID of the user

const MainFeed = () => {
  return (
    <div className="container">

      <div className="card-deck">
        <div className="card">
          <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div className="card">
          <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div className="card">
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
      </div><br />

      <div className="card-deck">
        <div className="card">
          <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div className="card">
          <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div className="card">
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Some post</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainFeed;
