import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 10fr 1fr;
  width: 100%;
  background-color: #4169E1;
  img {
    margin: 20px;
  }
  #profile-cover {
    margin: 5px;
    padding: 15px 15px 0px 0px;
    grid-column: 3;
    grid-row:1;
  }
  #profile-pic {
    grid-column: 2;
    grid-row:1;
    border-radius: 15px;
    border: 2px solid #e8eef1;
    margin: 15px 0px 15px 15px;
  }
  #profile-name-link {
    grid-row:1;
    grid-column: 3;
    padding: 15px;
    width: 50%;
    margin: 15px;
    font-size: xx-large;
    float: left;
    /* right: ${props => (props.isScrollAvailable ? 540 : 550)}; */
  }
  #profile-name {
    width: 100%;
    height: 76px;
    padding: 5px;
    text-align: left;
    opacity: 0.9;
    position: relative;
    font-weight: bold;
    background-color: #4169E1;
  }
  #profile-name:hover {
    opacity:1;
  }
  #logo {
    grid-column:1;
    margin: 15px 0px 15px 15px;
    border: 2px solid #e8eef1;
    border-radius: 15px;
  }
  .button-menu {
    display: grid;
    grid-column: 4;
  }
`;

// const profileName = styled.img`
//   right: ${props => props.right ? props.right : 120};
// `

const Button = styled.button`
  font-weight: bold;
  font-size: small;
  width: 110px;
  color: white;
  background-color: #116530;
  border-radius: 10px;
  :hover {
    background-color: #00a300;
  }
`;

const Header = () => {
  const user = 'Petar Georgiev Georgiev';
  return (
    <Wrapper>
      <Link to="/logged">
        <img id="logo" src={require('../landing/imgs/logo.jpg')} alt="logo" />
      </Link>
      <img
        id="profile-pic"
        src={require('./imgs/profile-pic.jpg')}
        alt="profile-pic"
      />
      <Link id="profile-name-link" to="/logged/user">
        <button id="profile-name">{user}</button>
      </Link>
      <img
        id="profile-cover"
        src={require('./imgs/profile-cover.jpg')}
        alt="profile-cover"
      />
      <div className="button-menu">
        <Link to="/logged/messages">
          <Button>Chat</Button>
        </Link>
        <Link to="/logged/user/subscriptions">
          <Button>Subscriptions</Button>
        </Link>
        <Link to="/logged/search">
          <Button>Search</Button>
        </Link>
        <Link to="/logged/settings">
          <Button>Settings</Button>
        </Link>
        <Link to="/">
          <Button>Sign Out</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
