import React from 'react';
import { Link } from 'react-router-dom';
// Have to change user-pic class to unique ID of the user

const MainFeed = () => {
  return (
    <div class="container">

      <div class="card-deck">
        <div class="card">
          <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div class="card">
          <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div class="card">
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
      </div><br />

      <div class="card-deck">
        <div class="card">
          <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div class="card">
          <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
        <div class="card">
          <img src={require('./imgs/TysonFury.jpg')} alt="Fury" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Some post</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><Link className="profile-link" to="/logged/user">
              Petar Georgiev Georgiev
                  </Link></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainFeed;
