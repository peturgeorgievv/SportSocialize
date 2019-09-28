import React from 'react';
import Videos from './Videos';
import Photos from './Photos';


const Media = () => {
  return (
    <div>
    <ul class="nav nav-pills nav-justified">
  <li class="nav-item">
  <a class="nav-link" href="#!">
    <Videos id="videos"/>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">
      <Photos id="photos" className="nav-link"/>
    </a>
  </li>
</ul>

      
    </div>
  );
};

export default Media;
