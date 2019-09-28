import React from 'react';
import { Link } from 'react-router-dom';
import $http from '../../api/users';
import M from "materialize-css";

class Header extends React.Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (

      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand font-weight-bold" to="/logged">
          SportSocialize
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn btn-dark font-weight-bold text-white bg-dark" id="profile-name-link" to="/logged/user">
                <img
                  className="img-fluid rounded"
                  id="profile-pic"
                  src={require('./imgs/profile-pic.jpg')}
                  alt="profile-pic"
                  style={{ width: '45px' }}
                />
                {this.props.firstName} (Petar Georgiev) {this.props.lastName}
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/logged/messages">
                Chat
        </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/logged/user/subscriptions">
                Subscriptions
        </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/logged/settings">
                Settings
        </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-danger" to="/">
                Sign Out
        </Link>
            </li>
            {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#!">Action</a>
          <a className="dropdown-item" href="#!">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#!">Something else here</a>
        </div>
      </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn-dark btn-lg my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  };
}

export default Header;
