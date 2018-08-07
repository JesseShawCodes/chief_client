import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './project.css'

class Projects extends Component {

    render() {
      return (
        <div className="App">
          <header className="app-button">
            <Button variant="contained" color="primary">{this.props.title}</Button>
          </header>
        </div>
    );
  }
}
  
export default Projects;