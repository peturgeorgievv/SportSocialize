import React from 'react';
import { Link } from 'react-router-dom';
// Have to change user-pic class to unique ID of the user

const MainFeed = () => {
  return (
   <div class="container">
      <div>
          <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image">
              <img src={require('./imgs/MikeTyson1.jpg')} alt="MikeTyson" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
              <Link className="profile-link" to="/logged/user">
                    Petar Georgiev Georgiev
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image">
              <img src={require('./imgs/Tyson2.jpg')} alt="MikeTyson2" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
              <Link className="profile-link" to="/logged/user">
                    Petar Georgiev Georgiev
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image">
              <img src={require('./imgs/TysonFury.jpg')} alt="Fury" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
              <Link className="profile-link" to="/logged/user">
                    Petar Georgiev Georgiev
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;
