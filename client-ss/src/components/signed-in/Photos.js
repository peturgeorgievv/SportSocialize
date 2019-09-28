import React from 'react';

const Photos = () => {
  return (
      <div>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button type="button" class="btn btn-primary btn-lg">All Photos</button>
          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#!">Dropdown link</a>
              <a class="dropdown-item" href="#!">Dropdown link</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Photos;
