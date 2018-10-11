import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = ({ project }) => {
  const { title, body } = project;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <Link to="/:id">
          <span className="card-title">{title}</span>
        </Link>
        <p>Posted by Humayun</p>
        <p className="grey-text">3rd September, 2AM</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
