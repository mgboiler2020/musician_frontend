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
    this.getBandList();
    this.getUserList();
    this.loginOnChange();
    this.login();
    // this.signup();
    
  };
  getSessionList = async () => {
    const response = await axios.get('http://localhost:3001/session/all');
    console.log(response);
    this.setState({
      sessions: response.data,
    });
  };
 
  getBandList = async () => {
    const response = await axios.get('http://localhost:3001/band/all');
    console.log(response);
    this.setState({
      band: response.data,
    });
  };

  getUserList = async () => {
    const response = await axios.get('http://localhost:3001/user/all');
    console.log(response);
    this.setState({
      band: response.data,
    });
  };

  loginOnChange = () => {
    // e.preventDefault();
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
    const response = await axios.post('http://localhost:3001/user/login', data);
    console.log(response);
  }

  render() {
    const sessions = this.state.sessions.map((session) => {
      return (
       
        <div>
          <p>Test, it works</p>
          <h3>{session.sessionName}, {session.sessionLocation}, {session.sessionDate}</h3><br></br>
        </div>
      );
    });
    return (
      <div className='App'>
        <h3>Login</h3>
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