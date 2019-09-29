import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../api/users';
// Have to change user-pic className to unique ID of the user

class MainFeed extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const token = localStorage.getItem('currentUser');
    const response = await $http.get(`/api/users/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    this.setState({ data: response.data });
  }




  render() {

    const allImages = this.state.data.map((image) => {
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
    })


    return (
      <div className="container">

        {allImages}

      </div>
    );
  }
};

export default MainFeed;
