import React from 'react';

export default function Navigation(props) {
  const { content, setContent } = props;
  return (
    <nav>
      <ul className="nav-list">
        <li className={"nav-item nav-link " + (content === "about" ? "disabled" : "")} onClick={() => setContent('about')}>About Me</li>
        <li className={"nav-item nav-link " + (content === "portfolio" ? "disabled" : "")} onClick={() => setContent('portfolio')}>Portfolio</li>
        <li className={"nav-item nav-link " + (content === "contact" ? "disabled" : "")} onClick={() => setContent('contact')}>Contact</li>
        <li className={"nav-item nav-link " + (content === "resume" ? "disabled" : "")} onClick={() => setContent('resume')}>Resume</li>
      </ul>
    </nav>
  )
}