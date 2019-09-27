import React from 'react';
// import styled from 'styled-components';

// const SideMenuWrapper = styled.div`
//   margin: 10px;
//   grid-column: 3;
//   button {
//     display: block;
//     font-weight: bold;
//     width: 100%;
//     color: white;
//     background-color: #116530;
//     border-radius: 10px;
//     :hover {
//       background-color: #00a300;
//     }
//   }
//   #subscribe {
//     background-color: #cc0000;
//     :hover {
//       background-color: #ff0000;
//     }
//   }
// `;

const SideMenu = () => {
  return (

      <div className="col s2">
        <button id="subscribe">Subscribe</button>
        <button>Videos</button>
        <button>Pictures</button>
        <button>Certificates</button>
        <button>5</button>
      </div>
  );
};

export default SideMenu;
