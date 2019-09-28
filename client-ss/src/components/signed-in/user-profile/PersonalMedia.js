import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../../api/users';
import axios from 'axios';
import jwt from "jsonwebtoken";

class PersonalMedia extends React.Component {
  state = {
    data: [],
    title: '',
    description: '',
    photoUrl: '',
  };

  async componentDidMount() {
    const token = localStorage.getItem('currentUser');
    const decoded = jwt.decode(token);
    const response = await $http.get(`/api/users/posts/${decoded.sub}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(response);
    this.setState({ data: response.data });
  }


  onTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  onDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  onUrlChange = event => {
    this.setState({ photoUrl: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const token = localStorage.getItem('currentUser');
    const decoded = jwt.decode(token);

    console.log(token)
    console.log(decoded.sub)

    const axiosInstance = await axios.create({
      baseURL: `http://localhost:3002`,
      headers: { Authorization: `Bearer ${token}` },
    });

    axiosInstance.post(`/api/users/${decoded.sub}/posts`, {
      title: this.state.title,
      description: this.state.description,
      photoUrl: this.state.photoUrl,
    })

    //   const request = $http.post(`/api/users/${decoded.sub}/posts`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //       title: this.state.title,
    //       description: this.state.description,
    //       photoUrl: this.state.photoUrl,
    //   });
    await window.location.reload()
  };

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

        <form onSubmit={this.onFormSubmit}>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={require('../imgs/logoformat.png')} alt="sportsocialize" className="card-img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Write post</h5>
                  <input type="text" class="form-control" onChange={this.onTitleChange} value={this.state.title} placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" /><br />
                  <p className="card-text">
                    <textarea onChange={this.onDescriptionChange} value={this.state.description} className="form-control" placeholder="Description" aria-label="With textarea"></textarea>
                  </p>
                  <p className="card-text">
                    <span class="input-group-text" id="basic-addon1">IMAGE URL</span>
                    <input type="text" class="form-control" onChange={this.onUrlChange} value={this.state.photoUrl} placeholder="https://" aria-label="url" aria-describedby="basic-addon1" />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Add Post</button>
          </div>
        </form>

        {allImages}

      </div>
    );
  };
}

export default PersonalMedia;
