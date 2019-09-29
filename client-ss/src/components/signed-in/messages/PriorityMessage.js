import React from 'react';
import { Link } from 'react-router-dom';
class PriorityMessage extends React.Component {
  render() {
    const chatMessage2 = 'Well this is some msg...';
    const chatMessage3 = 'Well this is some msg...';
    const msgPriority = 'Priority'
    var data = [
      { id: 1, name: 'Georgi Petrov Petrov', date: '1 Jan 2019' },
      { id: 2, name: 'Ivan Iordanov Georgiev', date: '30 Mar 2021' },
      { id: 3, name: 'Joro Ivanov', date: '30 Mar 2021' },
    ];
    return (
      <div>
        <div>
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
              <div className="nav-link">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <Link type="button" to="/logged/messages/regular" className="btn btn-primary btn-lg">Regular Messages</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <Link type="button" to="/logged/messages/priority" className="btn btn-primary btn-lg">Priority Messages</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">

          <div className="media">
            <img src={require('../imgs/profil-pic-post.jpg')} className="mr-3 img-fluid rounded" alt="..." />
            <div className="media-body">
              <h5 className="mt-0"><span class="badge badge-danger">{msgPriority}</span> <a href="#!">{data[1].name}</a></h5>
              {chatMessage2}
            </div>
          </div><br />

          <div className="media">
            <img src={require('../imgs/profil-pic-post.jpg')} className="mr-3 img-fluid rounded" alt="..." />
            <div className="media-body">
              <h5 className="mt-0"><span class="badge badge-danger">{msgPriority}</span> <a href="#!">{data[2].name}</a></h5>
              {chatMessage3}
            </div>
          </div><br />
        </div>
      </div>
    );
  }
};

export default PriorityMessage;
