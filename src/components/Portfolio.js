import React from 'react';
import Project from './Project';
import projects from '../assets/project-data/projects.json'

export default function Portfolio() {
  return (
    <div className="project-box">
      {projects.map((project) => (
        <Project imageUrl={project.imageUrl} name={project.name} github={project.github} livelink={project.livelink} />
      ))}
    </div>
  )
}