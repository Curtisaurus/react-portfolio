import React from 'react';

export default function Navigation(props) {
  const { setContent } = props;
  return (
    <nav>
      <ul>
        <li className="nav-item" onClick={() => setContent('about')}>About Me</li>
        <li className="nav-item" onClick={() => setContent('portfolio')}>Portfolio</li>
        <li className="nav-item" onClick={() => setContent('contact')}>Contact</li>
        <li className="nav-item" onClick={() => setContent('resume')}>Resume</li>
      </ul>
    </nav>
  )
}