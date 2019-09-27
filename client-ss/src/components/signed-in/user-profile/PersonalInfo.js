import React from 'react';
import M from "materialize-css";
class PersonalInfo extends React.Component {
  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }
  render() {

    return (
      <div className="col s12">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Proffesional Fitness-Trainer</h4></li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
          <li class="collection-item">Certificate about suplementing</li>
        </ul>
      </div>
    );
  }
};

export default PersonalInfo;
