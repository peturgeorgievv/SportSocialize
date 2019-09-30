import React from 'react';
import { Link } from 'react-router-dom';

const SubscribedTo = () => {
  var data = [
    { id: 1, name: 'Georgi Petrov Petrov', date: '1 Jan 2019' },
    { id: 2, name: 'Ivan Iordanov Georgiev', date: '30 Mar 2021' },
  ];

  return (
    <div>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <Link subscribers to="/logged/user/subscriptions" class="btn btn-primary btn-lg">
              Subscribers
          </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <Link id="subscribed" to="/logged/user/subscribed" class="btn btn-primary btn-lg">
              Subscribed To
          </Link>
          </a>
        </li>
      </ul>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscribedTo;
