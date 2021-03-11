import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello, I am testing app.js</h2>
    </div>
  );
}

export default App;


// for future use:

// componentDidMount = () => {
//   this.getCities();
// };
// getCities = async () => {
//   const response = await axios.get('http://localhost:3001/city/all');
//   this.setState({
//     cities: response.data,
//   });
// };