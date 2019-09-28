import React from 'react';
// <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" /> {user1}

const Subscribers = () => {
  var data = [
    { id: 1, name: 'Georgi Petrov Petrov', date: '1 Jan 2019' },
    { id: 2, name: 'Ivan Iordanov Georgiev', date: '30 Mar 2021' },
    { id: 3, name: 'Joro Iordanov Jordan', date: '20 Mar 2011' }
  ];

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Names</th>
            <th scope="col">Since</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" className="img-fluid rounded" />
              {data[0].name}
            </td>
            <td>{data[0].date}</td>
            <td>
              <button className="subscribe btn btn-dark">Subscribe</button>
              <button id="remove" className="btn btn-danger">Remove</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" className="img-fluid rounded" />
              {data[1].name}</td>
            <td>{data[1].date}</td>
            <td><button className="subscribe btn btn-dark">Subscribe</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><img src={require('../imgs/profil-pic-post.jpg')} alt="post-pic" className="img-fluid rounded" />
              {data[2].name}</td>
            <td>{data[2].date}</td>
            <td><button className="subscribe btn btn-dark">Subscribe</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;
