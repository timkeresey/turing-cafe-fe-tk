import React, { Component } from 'react';
import './App.css';
import { getAllRes } from '../apiCalls.js';
import ResContainer from '../ResContainer/ResContainer.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addRes = newRes => {
    this.setState({ reservations: [...this.state.reservations, newRes] });
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
          <ResContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
