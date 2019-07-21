import React from 'react';
import styled from 'styled-components';

const SubscribersWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;

  text-align: left;
  padding: 5px;
  margin: 15px;
  img {
    border-radius: 100%;
    padding: 5px;
  }
  h3 {
    text-align: center;
    font-weight: bold;
    border-bottom: 4px solid #81b622;
  }
  tr td:nth-child(3n + 3) {
    width: 15%;
  }

  tr td:nth-child(3n + 2) {
    width: 15%;
  }
  button {
    display: inline-block;
    font-weight: bold;
    width: 50%;
    color: white;
    background-color: #116530;
    border-radius: 10px;
    :hover {
      background-color: #00a300;
    }
  }
  .subscribe {
    background-color: #cc0000;
    :hover {
      background-color: #ff0000;
    }
  }
`;
// <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" /> {user1}

const Subscribers = () => {
  var data = [
    { id: 1, name: 'Georgi Petrov Petrov', date: '1 Jan 2019' },
    { id: 2, name: 'Ivan Iordanov Georgiev', date: '30 Mar 2021' },
    { id: 3, name: 'Joro Iordanov Jordan', date: '20 Mar 2011' }
  ];

  return (
    <SubscribersWrapper>
      <table>
        <tr>
          <th>
            <h3>Names</h3>
          </th>
          <th>
            <h3>Since</h3>
          </th>
          <th>
            <h3>Actions</h3>
          </th>
        </tr>
        <tr>
          <td>
            <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" />
            {data[0].id} {data[0].name}
          </td>
          <td>{data[0].date}</td>
          <td>
            <button className="subscribe">Subscribe</button>
            <button id="remove">Remove</button>
          </td>
        </tr>
        <tr>
          <td>
            <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" />{' '}
            {data[1].id} {data[1].name}
          </td>
          <td>{data[1].date}</td>
          <td>
            <button className="subscribe">Subscribe</button>
          </td>
        </tr>
        <tr>
          <td>
            <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" />{' '}
            {data[2].id} {data[2].name}
          </td>
          <td>{data[2].date}</td>
          <td>
            <button className="subscribe">Subscribe</button>
          </td>
        </tr>
      </table>
    </SubscribersWrapper>
  );
};

export default Subscribers;
