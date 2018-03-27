import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TimeFormat extends Component {
  render() {
    let time = new Date()
    return (
      <div>
        <input type="date" />
        <div>
          {time.toLocaleTimeString()}
        </div>
        <div>
          {time.toDateString()}
        </div>
        <div>
          {time.toLocaleDateString()}
        </div>
        <div>
          {time.toLocaleString()}
        </div>
        <div>
          {time.toTimeString()}
        </div>
      </div>
    );
  }
}

export default TimeFormat;
