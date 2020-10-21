import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: undefined
    }
  }

  inputsChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={e => this.inputsChange(e)}
        />
        <input
        type='text'
        name='date'
        placeholder='Date (mm/dd)'
        value={this.state.date}
        onChange={e => this.inputsChange(e)}
        />
        <input
        type='text'
        name='time'
        placeholder='time (12:00)'
        value={this.state.time}
        onChange={e => this.inputsChange(e)}
        />
        <input
        type='number'
        min='1'
        max='20'
        name='number'
        placeholder='guests'
        value={this.state.number}
        onChange={e => this.inputsChange(e)}
        />
        <button>Submit</button>
      </form>
    )
  }
}


export default Form;
