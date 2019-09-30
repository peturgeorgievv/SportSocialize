import React from 'react';
import { Link } from 'react-router-dom';

class MainFeed extends React.Component {

  render() {
    const allImages = this.props.allPosts ? this.props.allPosts.map((image) => {
      return (
        <div>
          <div className="card-deck">
            <div className="card">
              <img src={image.photoUrl} alt={image.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
                <p className="card-text"><Link className="profile-link" to="/logged/user">
                  Petar Georgiev Georgiev
                </Link></p>
              </div>
            </div>
          </div><br />
        </div>
      )
    }) : "Loading...";


    return (
      <div className="container">

        {allImages}

      </div>
    );
  }
};

export default MainFeed;
