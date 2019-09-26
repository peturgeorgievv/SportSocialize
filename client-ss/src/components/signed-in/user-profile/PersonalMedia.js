import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import $http from '../../../api/users';

const PersonalMediaWrapper = styled.div`
  margin: 10px;
  border: 4px solid #81b622;
  border-radius: 5px;
  grid-column: 1;
  grid-row: 2;
  ul {
    list-style-type: none;
    padding: 0px;
  }

  .post {
    margin: 25px 10px 25px 10px;
    padding: 10px;
    border-bottom: 4px solid #81b622;
  }
  .user-pic {
    border-radius: 100%;
  }
  .user-info {
    background: #e1f9cd;
    padding: 5px;
    margin-bottom: 10px;
  }

  .profile-link {
    display: inline;
    margin: 5px;
    padding: 15px;
    font-weight: bold;
    font-size: x-large;
    color: black;
  }
  .profile-link:hover {
    color: #4169e1;
  }

  #add-post {
    grid-row: 1;
    grid-column: 1;
  }
  textarea {
    width: 560px;
    height: 110px;
    border: 3px solid #cccccc;
    padding: 5px;
    resize: none;
  }
  button {
    display: inline-block;
    font-weight: bold;
    width: 50%;
    color: white;
    background-color: #116530;
    border-radius: 10px;
    :hover {
      background-color: #00a300;
    }
  }
`;

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
      <PersonalMediaWrapper>
        <div id="add-post">
          <div className="post">
            <div className="user-info">
              <img
                className="user-pic"
                src={require('../imgs/profil-pic-post.jpg')}
                alt="profile-pic-user"
              />
              <Link 
                className="profile-link"  
                to="/logged/user"
              >
                {this.state.data.firstName} {this.state.data.lastName}
              </Link>
            </div>
            <form>
              <h3>What do you think?</h3>
              <textarea />
              <button>Post</button>
              <button>Add Media</button>
            </form>
          </div>
        </div>

        <ul>
          <li>
            <div className="post">
              <div className="user-info">
                <img
                  className="user-pic"
                  src={require('../imgs/profil-pic-post.jpg')}
                  alt="profile-pic-user"
                />
                <Link className="profile-link" to="/logged/user">
                {this.state.data.firstName} {this.state.data.lastName}
                </Link>
              </div>
              <h5>Post: Mike Tyson fighting</h5>
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
            </div>
          </li>

          <li>
            <div className="post">
              <div className="user-info">
                <img
                  className="user-pic"
                  src={require('../imgs/profil-pic-post.jpg')}
                  alt="profile-pic-user"
                />
                <Link className="profile-link" to="/logged/user">
                {this.state.data.firstName} {this.state.data.lastName}
                </Link>
              </div>
              <h5>Post: Mike Tyson fighting</h5>
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
            </div>
          </li>

          <li>
            <div className="post">
              <div className="user-info">
                <img
                  className="user-pic"
                  src={require('../imgs/profil-pic-post.jpg')}
                  alt="profile-pic-user"
                />
                <Link className="profile-link" to="/logged/user">
                {this.state.data.firstName} {this.state.data.lastName}
                </Link>
              </div>
              <h5>Post: Mike Tyson fighting</h5>
              <img src={require('../imgs/dietFood.jpg')} alt="MikeTyson" />
            </div>
          </li>
        </ul>
      </PersonalMediaWrapper>
    </div>
  );
  };
}

export default PersonalMedia;
