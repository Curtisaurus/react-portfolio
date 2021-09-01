import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  

  return (
    <header className="container-fluid">
      <div className="row">
        <h1 className="col">Curtis Drullinger</h1>
        <div className="col-8">
          <Navigation {...props} />
        </div>
      </div>
    </header>
  ) 
}