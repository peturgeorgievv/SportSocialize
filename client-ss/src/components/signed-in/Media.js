import React from 'react';
import Videos from './Videos';
import Photos from './Photos';


const Media = () => {
  return (
    <div className="row container">
      <Videos id="videos" className="col s6"/>
      <Photos id="photos" className="col s6"/>
    </div>
  );
};

export default Media;
