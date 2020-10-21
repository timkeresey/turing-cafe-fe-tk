import React, { Component } from 'react';
import './App.css';
import { getAllRes } from '../apiCalls.js';
import ResContainer from '../ResContainer/ResContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getAllRes()
    .then(data => this.setState({ reservations: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResContainer reservation={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
