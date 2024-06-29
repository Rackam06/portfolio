import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <a href={project.link} className="project-title">{project.name}</a>
        <div className="project-description">{project.description}</div>
        <div className="project-languages">
          {project.languages.map((language) => (
            <img src={language.logo} alt={language.name} className="language-logo" />
          ))}
        </div>
      </div>
    </div>
  );
}