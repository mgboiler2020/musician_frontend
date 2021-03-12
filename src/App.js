import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      username: '',
      password: '',
    };
  }
  componentDidMount = () => {
    this.getCities();
  };
  getCities = async () => {
    const response = await axios.get('http://localhost:3001/city/all');
    this.setState({
      cities: response.data,
    });
  };
  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
  };

  signUpOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
  };
  render() {
    const cities = this.state.cities.map((city) => {
      return (
        <div>
          <h3>{city.name}</h3>
          <img src={city.img} alt='city' />
          <p>
            {city.state}, {city.country}
          </p>
        </div>
      );
    });
    return (
      <div className='App'>
        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        {cities}
      </div>
    );
  }
}
export default App;