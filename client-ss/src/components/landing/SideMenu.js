import React from 'react';
import styled from 'styled-components';

const Accordion = styled.div`
  display: inline-block;
  padding: 20px;
  margin: 30px;

  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
  }

  .active,
  .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }
`;

const SideMenu = () => {
  return (
    <Accordion>
      <div>
        <button class="accordion">First reason</button>
        <div class="panel">
          <p>First reason</p>
        </div>

        <button class="accordion">Second Reason</button>
        <div class="panel">
          <p>Second Reason</p>
        </div>

        <button class="accordion">Third Reason</button>
        <div class="panel">
          <p>Third Reason</p>
        </div>

        <button class="accordion">4 Reason</button>
        <div class="panel">
          <p>Fourth Reason</p>
        </div>
      </div>
    </Accordion>
  );
};

export default SideMenu;
