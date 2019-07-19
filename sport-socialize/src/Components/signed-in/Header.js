import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: #172a08;
  img {
    margin: 20px;
  }
  #profile-cover {
    margin: 5px;
    padding-right: 25px;
  }
  #profile-pic {
    position: absolute;
  }
  #profile-name-link {
    position: absolute;
    width: 70%;
    margin: 20px 0px 0px 150px;
    font-size: xx-large;
    float: left;
    /* right: ${props => (props.isScrollAvailable ? 540 : 550)}; */
  }
  #profile-name {
    width: 100%;
    height: 96px;
    padding: 25px;
    text-align: left;
  }
  .button-menu {
    display: grid;
    grid-column: 2;
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
  background-color: #234806;
  border-radius: 10px;
  :hover {
    background-color: green;
  }
`;

const Header = () => {
  const user = 'Petar Georgiev Georgiev';
  return (
    <Wrapper>
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
        <Link to="/logged/friends">
          <Button>Friends</Button>
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
