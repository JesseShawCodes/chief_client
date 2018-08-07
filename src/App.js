import React, { Component } from 'react';
import Projects from './containers/projects'

import './App.css'

import { searchProjects } from './actions/actions.js'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projectNames: this.props.projectNames,
        loading: undefined,
        error: null
    };
  } 

  componentDidMount() {
    this.props.dispatch(searchProjects())
  }

  renderProjects() {
    var projectOutputs = []
    for (var i = 0; i < this.props.projectNames.length; i++) {
      console.log(this.props.projectNames)
      projectOutputs[i] = <Projects
        key={i}
        title={this.props.projectNames[i]}
      />
    }
    return (
      <section>
        {projectOutputs}
      </section>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://agencychief.com/themes/chief/logo.svg" className="App-logo" alt="logo" />
        </header>
        <h1 className="main-heading">Projects</h1>
        {this.renderProjects()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projectNames: state.projectNames,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App)