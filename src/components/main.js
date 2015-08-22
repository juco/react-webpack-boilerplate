import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>React & React Router</h1>
        <Link to='example'>Example</Link>
        <Link to='about'>About</Link>

        <RouteHandler />
      </div>
    );
  }
}

export default Main;
