import React from 'react';

const Photos = () => {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-primary btn-lg">All Photos</button>
        <div className="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" className="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
            </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="#!">Dropdown link</a>
            <a className="dropdown-item" href="#!">Dropdown link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
