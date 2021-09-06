import React from 'react';

export default function Project(props) {
  return (
    <div className="project-Card">
      <h3>{props.name}</h3>
      <img className="project-img" src={props.imageUrl} alt={props.name}></img>
      <a href={props.github}>GitHub</a>
      <a href={props.livelink}>Live App</a>
    </div>
  )
}