import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  float: left;
  top: 0;
  width: 100%;
  background-color: #172a08;
  h2 {
    margin: 5px 10px 15px 10px;
    padding: 10px 20px 10px 20px;
    color: white;
    float: left;
  }
  button {
    color: white;
  }
`;

const Button = styled.button`
  float: right;
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
      <Button>Login</Button>
      <Button>Register</Button>
    </Wrapper>
  );
};

export default Header;
