import React from 'react';
import Videos from './Videos';
import Photos from './Photos';


const Media = () => {
  return (
    <div>
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item nav-link">
          <Videos id="videos" />
        </li>
        <li className="nav-item nav-link">
          <Photos id="photos" className="nav-link" />
        </li>
      </ul>


    </div>
  );
};

export default Media;
