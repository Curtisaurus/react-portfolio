import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  const { content, setContent } = props

  return (
    <header>
      <Navigation content={content} setContent={setContent} />
    </header>
  ) 
}