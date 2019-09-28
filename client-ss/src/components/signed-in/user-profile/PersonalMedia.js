import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../../api/users';
import axios from 'axios';
import jwt from "jsonwebtoken";

class PersonalMedia extends React.Component {
  state = { data: [] };

  // getData = async () => {
  //   return await $http.get('/api/users/posts');
  // }



  async componentDidMount() {

    const token = localStorage.getItem('currentUser');
    const decoded = jwt.decode(token);
    const response = await $http.get(`/api/users/posts/${decoded.sub}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    this.setState({ data: response.data });
    console.log(this.state.data);
  }


  render() {

    const allImages = this.state.data.map((image) => {
      return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image.photoUrl} alt={image.title} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
                <p className="card-text">
                  <Link className="profile-link blue-text" to="/logged/user">
                    {this.state.data.firstName} Here will be name{this.state.data.lastName}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div>


        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Write post</h5>
                <p className="card-text">
                  <textarea className="form-control" aria-label="With textarea"></textarea>
                </p>
                <p className="card-text">

                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="inputGroupFile02" />
                      <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary">Add Post</button>
        </div>

        {allImages}

      </div>
    );
  };
}

export default PersonalMedia;
