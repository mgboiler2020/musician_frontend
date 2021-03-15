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
      bands: [],
      users: [],
      username: '',
      password: '',
    };
  }
  componentDidMount = () => {
    this.getSessionList();
  };
  getSessionList = async () => {
    const response = await axios.get('http://localhost:3001/session/all');
    console.log(response);
    this.setState({
      sessions: response.data,
    });
  };
  componentDidMount = () => {
    this.getBandList();
  };
  getBandList = async () => {
    const response = await axios.get('http://localhost:3001/band/all');
    console.log(response);
    this.setState({
      band: response.data,
    });
  };
  
  render() {
    const sessions = this.state.sessions.map((session) => {
      return (
       
        <div>
          <p>Test, it works</p>
          <h3>{session.sessionName}, {session.sessionLocation}, {session.sessionDate}</h3><br></br>
         
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
        {sessions}
      </div>
    );
  }
}
export default App;