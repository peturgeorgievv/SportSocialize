import React from 'react';

const SideMenu = () => {
  return (
    <div className="col 2">
      <div className="btn-group-vertical" role="group">
        <button type="button" className="btn btn-primary btn-lg">Subscribe</button>
        <button type="button" className="btn btn-primary btn-lg">Videos</button>
        <button type="button" className="btn btn-primary btn-lg">Pictures</button>
        <button type="button" className="btn btn-primary btn-lg">Certificates</button>
        <button type="button" className="btn btn-primary btn-lg">5</button>
      </div>
    </div>
  );
};

export default SideMenu;
