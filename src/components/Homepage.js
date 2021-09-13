import React from 'react';
import "../css/main.css"; 

class HomePage extends React.Component {
  render(){
    return(
      <div className="homepage">
        <h2>Get Started with React!</h2>
        <p className="homepage-intro">
          Start by adding react components in <code>src/components</code>.
        </p>
      </div>
    )
  }
}

export default HomePage;
