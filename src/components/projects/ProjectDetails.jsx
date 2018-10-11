import React from 'react';
// import { Link } from 'react-router-dom';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quisquam velit atque maxime non tempore at minus consequatur. Labore
            impedit eius excepturi iure sit commodi dignissimos temporibus
            quibusdam iusto vel?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>2nd September, 2AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
