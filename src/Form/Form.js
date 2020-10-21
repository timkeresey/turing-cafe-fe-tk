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

  render() {
    return (
      <form>
        <input type='text' name='name' placeholder='Name'/>
        <input type='text' name='date' placeholder='Date (mm/dd)'/>
        <input type='text' name='time' placeholder='time (12:00)'/>
        <input type='number' min='1' max='20' name='number' placeholder='guests'/>
        <button>Submit</button>
      </form>
    )
  }
}


export default Form;
