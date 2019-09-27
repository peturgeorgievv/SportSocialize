import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../../api/users';
import M from "materialize-css";

//   border: 4px solid #81b622;
//     border-bottom: 4px solid #81b622;
//     background: #e1f9cd;
//     color: #4169e1;
//     background-color: #116530;
//       background-color: #00a300;


class PersonalMedia extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await $http.get('/api/users/94c583ae-9c90-4b5e-b139-b3dcb3f85d2d')
    this.setState({ data: response.data });
    console.log(this.state.data);

      // Auto initialize all the things!
      M.AutoInit();
  }
  
  render() {

  return (
    <div>
      <div className="col s12">
        <div>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <div class="row">
                    <form class="col s12">
                        <div class="input-field col s12">
                          <textarea id="textarea1" class="materialize-textarea"></textarea>
                          <label for="textarea1">Textarea</label>

                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-action">
                <button className="btn-large blue" id="profile-name">ADD POST</button>
                  <form action="#">
                    <div class="file-field input-field">
                      <div class="btn-large blue">
                        <span>Add Media</span>
                        <input type="file" />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
      </div>
    

      <div>
        <div>
            <div className="card horizontal">
              <div className="card-image">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div className="card-action">
                <Link className="profile-link blue-text" to="/logged/user">
                {this.state.data.firstName} Here will be name{this.state.data.lastName}
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      
      <div>
        <div>
            <div className="card horizontal">
              <div className="card-image">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Mike Tyson fighting</p>
                </div>
                <div className="card-action">
                <Link className="profile-link blue-text" to="/logged/user">
                {this.state.data.firstName} Here will be name{this.state.data.lastName}
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div>
            <div className="card horizontal">
              <div className="card-image">
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Mike Tyson fighting</p>
                </div>
                <div className="card-action">
                <Link className="profile-link blue-text" to="/logged/user">
                {this.state.data.firstName} Here will be name{this.state.data.lastName}
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
  };
}

export default PersonalMedia;
