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
    <div className="col s12">
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <nav>
        <div className="nav-wrapper blue">
          <Link  className="brand-logo" to="/">
            <img
                className="responsive-img circle"
                id="profile-pic"
                src={require('./imgs/profile-pic.jpg')}
                alt="profile-pic"
              />
          </Link>
          
          <ul className="right hide-on-med-and-down">
          <li>          
           <Link id="profile-name-link" to="/logged/user">
         <button className="btn-large green" id="profile-name">{this.props.firstName}(Petar Georgiev) {this.props.lastName}</button>
         </Link>
          </li>
            <li><div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div></li>
            <li>
              <Link to="/logged/messages">
                Chat
              </Link>
           </li>
            <li>
              <Link to="/logged/user/subscriptions">
                Subscriptions
              </Link>
            </li>
            <li>
              <Link to="/logged/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/">
                Sign Out
              </Link>
            </li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
}

export default Header;
