import React from 'react';

export default function Navigation(props) {
  const { setContent } = props;
  return (
    <nav>
      <ul>
        <li onClick={() => setContent('about')}>About Me</li>
        <li onClick={() => setContent('portfolio')}>Portfolio</li>
        <li onClick={() => setContent('contact')}>Contact</li>
        <li onClick={() => setContent('resume')}>Resume</li>
      </ul>
    </nav>
  )
}