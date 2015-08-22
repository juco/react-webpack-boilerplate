import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <dl>
          <dt>Author</dt>
          <dd>
            <a href='mailto:julian@juco.co.uk'>Julian Cohen</a>
          </dd>
        </dl>
      </div>
    );
  }
}

export default About;
