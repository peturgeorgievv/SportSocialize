import React from 'react';
import styled from 'styled-components';

const SideMenuWrapper = styled.div`
  width: 10%;
  margin: 10px;
  float: right;
  border: 7px solid #172a08;
  border-radius: 5px;
  button {
    display: block;
    font-weight: bold;
    width: 100%;
    color: white;
    background-color: #234806;
    border-radius: 10px;
    :hover {
      background-color: green;
    }
  }
`;

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <div>
        <button>Videos</button>
        <button>Pictures</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </SideMenuWrapper>
  );
};

export default SideMenu;
