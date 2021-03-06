import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Header extends React.Component {
  state = {
    data: [],
  };

  signOut = () => {
    localStorage.removeItem('currentUser');
    this.props.history.push('/');
    window.location.reload(); // Have to remove later on!
  }

  renderContent() {
    const token = localStorage.getItem('currentUser');

    switch (token) {
      case null:
      case false:
        return (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item p-2 bd-highlight">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/register">
                  Register
          </Link>
              </li>
              <li className="nav-item p-2 bd-highlight">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/forgpassword">
                  Forgotten Password
          </Link>
              </li>
              <li className="nav-item p-2 bd-highlight">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-danger" to="/login">
                  Sign In
          </Link>
              </li>
            </ul>
          </div>
        );
      default:
        return (

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link btn btn-dark font-weight-bold text-white bg-dark" id="profile-name-link" to="/logged/user">
                  <img
                    className="img-fluid rounded"
                    id="profile-pic"
                    src={require('./signed-in/imgs/profile-pic.jpg')}
                    alt="profile-pic"
                    style={{ width: '45px' }}
                  />
                  {this.props.firstName} (Petar Georgiev) {this.props.lastName}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/logged/messages">
                  Chat
        </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-dark" to="/logged/user/subscriptions">
                  Subscriptions
        </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-dark btn-lg font-weight-bold text-white bg-danger" to="/" onClick={this.signOut}>
                  Sign Out
        </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn-dark btn-lg my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark d-flex bd-highlight">
          <Link className="navbar-brand font-weight-bold p-2 flex-grow-1 bd-highlight" to={this.props.auth ? '/logged' : '/'}>
            <img src={require('./signed-in/imgs/logoformat.png')} alt="sportsocialize" className="img-fluid rounded" style={{ width: '65px', marginRight: '5px' }} />
            SportSocialize
            </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          {this.renderContent()}
        </nav>
      </div>
    );
  };
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(Header));
