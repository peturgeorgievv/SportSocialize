import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 3fr;
  width: 100%;
  background-color: #172a08;
  h2 {
    width: 17%;
    margin: 5px 10px 15px 10px;
    padding: 10px 20px 10px 20px;
    color: white;
    display: inline-block;
  }
  img {
    padding: 5px;
  }
  button {
    color: white;
    display: inline-block;
  }
  .buttons {
    grid-column: 5;
  }
`;

const Button = styled.button`
  display: grid;
  grid-column: 5;
  font-weight: bold;
  background-color: #234806;
  margin: 10px 10px 10px 10px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  :hover {
    background-color: green;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h2>SportSocialize</h2>
      <img src={require('./imgs/logo.jpg')} alt="logo" />
      <div className="buttons">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/forgpassword">
          <Button>Forgotten Password</Button>
        </Link>
        <Link to="/logged">
          <Button>Sign In</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
