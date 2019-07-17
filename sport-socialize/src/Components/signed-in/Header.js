import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #172a08;
  img {
    margin: 5px;
    float: left;
  }
  #profile-cover {
    top: 0px;
    left: 0px;
    margin: 5px;
    padding-right: 25px;
  }
  #profile-pic {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  #profile-name {
    position: absolute;
    top: 10px;
    left: 110px;
  }
`;

const Button = styled.button`
  display: block;
  font-weight: bold;
  font-size: small;
  width: 110px;
  color: white;
  background-color: #234806;
  margin: 5px;
  border-radius: 10px;
  :hover {
    background-color: green;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <img
        id="profile-pic"
        src={require('./imgs/profile-pic.jpg')}
        alt="profile-pic"
      />
      <img
        id="profile-name"
        src={require('./imgs/profile-name.jpg')}
        alt="profile-name"
      />
      <img
        id="profile-cover"
        src={require('./imgs/profile-cover.jpg')}
        alt="profile-cover"
      />
      <Link to="/messages">
        <Button>Chat</Button>
      </Link>
      <Link to="/logged/friends">
        <Button>Friends</Button>
      </Link>
      <Link to="/search">
        <Button>Search</Button>
      </Link>
      <Link to="/logged/settings">
        <Button>Settings</Button>
      </Link>
      <Link to="/">
        <Button>Sign Out</Button>
      </Link>
    </Wrapper>
  );
};

export default Header;
