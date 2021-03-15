import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      username: '',
      password: '',
    };
  }
  componentDidMount = () => {
    this.getSessionList();
  };
  getSessionList = async () => {
    const response = await axios.get('http://localhost:3001/session/all');
    this.setState({
      sessions: response.data,
    });
  };
  
  render() {
    const session = this.state.sessions.map((session) => {
      return (
        <div>
          <p>Test, it works</p>
          <h3>{session.sessionName}</h3>
          {/* <img src={city.img} alt='city' />
          <p>
            {city.state}, {city.country}
          </p> */}
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
        {/* {cities} */}
      </div>
    );
  }
}
export default App;