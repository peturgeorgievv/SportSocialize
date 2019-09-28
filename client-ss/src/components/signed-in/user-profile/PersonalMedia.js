import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../../api/users';

//   border: 4px solid #81b622;
//     border-bottom: 4px solid #81b622;
//     background: #e1f9cd;
//     #4169e1;
//     background-#116530;
//       background-#00a300;


class PersonalMedia extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await $http.get('/api/users/94c583ae-9c90-4b5e-b139-b3dcb3f85d2d')
    this.setState({ data: response.data });
    console.log(this.state.data);
  }

  render() {

    return (
      <div>


        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Write post</h5>
                <p class="card-text"><div class="input-group">
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                </div></p>
                <p class="card-text">

                  <div class="input-group mb-3">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile02" />
                      <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                    </div>
                    <div class="input-group-append">
                      <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary">Add Post</button>
        </div>



        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                  <Link className="profile-link blue-text" to="/logged/user">
                    {this.state.data.firstName} Here will be name{this.state.data.lastName}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                  <Link className="profile-link blue-text" to="/logged/user">
                    {this.state.data.firstName} Here will be name{this.state.data.lastName}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><Link className="profile-link blue-text" to="/logged/user">
                  {this.state.data.firstName} Here will be name{this.state.data.lastName}
                </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      //                           <textarea id="textarea1" class="materialize-textarea"></textarea>
      //                           <label for="textarea1">Textarea</label>
      //                         <span>Add Media</span>



    );
  };
}

export default PersonalMedia;
