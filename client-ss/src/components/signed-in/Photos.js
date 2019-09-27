import React from 'react';

const Photos = () => {
  return (
      <div className="col s6 center">
        <a className="btn-large blue" href="#!">All Photos</a>
          <ul id="dropdown1" class="dropdown-content">
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
          </ul>
        <ul class="right hide-on-med-and-down">
          <li><a className="dropdown-trigger btn-large blue" href="#!" data-target="dropdown1">Category<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
  );
};

export default Photos;
