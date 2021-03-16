import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import BandPage from './components/BandPage';
import SessionPage from './components/SessionPage';
import LoginPage from './components/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      bands: [],
      users: [],
      username: '',
      password: '',
      location: '',
      skills: '',
      currentProjects: '',
      pastProjects: '',
      genre: '',
    };
  }
  componentDidMount = () => {
    this.getSessionList();
    this.getBandList();
    this.getUserList();
    // this.loginOnChange();
    // this.login();
    // // this.signup();
    
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
    const response = await axios.post('http://localhost:3001/user/login', data);
    console.log(response);
  }

  signup = async () => {
    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      location: this.state.location,
      skills: this.state.skills,
      currentProjects: this.state.currentProjects,
      pastProjects: this.state.pastProjects,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/user/signup', data);
    console.log(response);
    }
  

  render() {
    // const sessions = this.state.sessions.map((session) => {
    //   return (
       
    //     <div>
    //       <p>Test, it works</p>
    //       <h3>{session.sessionName}, {session.sessionLocation}, {session.sessionDate}</h3><br></br>
    //     </div>
    //   );
    // });
    return (
      <div className='App'>
        <header>
          <h1>MusicianBook</h1>
          <div className='header'>
            <Link className='return-to-HomePage' to="/">Return to Home Page</Link>
          </div>
          </header>
          <main>
            <Route exact path='/' render={() => (
              <HomePage signup={this.signup}/> 
            )} />
            <Route exact path='/' render={() => (
              <UserProfile username={this.getUserList}/> 
            )} />
            <Route exact path='/' render={() => (
              <SessionPage sessions={this.getSessionList}/> 
            )} />
            <Route exact path='/' render={() => (
              <LoginPage login={this.login}/>
            )} />
            <Route exact path='/' render={() => (
              <BandPage bands={this.getBandList}/> 
            )} />
          </main>
        
        
        
        
        
        
        
        <h6>Login</h6>
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
        </form><br></br>
        <h6>Sign Up</h6>
        <form onSubmit={this.signup}>
          <input name='name' type='text' placeholder='name'/><br></br>
          <input username='username' type='text' placeholder='new username' value={this.state.username} onChange={this.loginOnChange}/><br></br>
            <input password='password' type='text' placeholder='new password' value={this.state.password} onChange={this.loginOnChange}/><br></br>
            <input location='location' type='text' placeholder='your location' value={this.state.location} onChange={this.loginOnChange}/><br></br>
            <input skills='skills' type='text' placeholder='list your skills' value={this.state.skills} onChange={this.loginOnChange}/><br></br>
            <input currentprojects='currentProjects' type='text' placeholder='current projects?' value={this.state.currentProjects} onChange={this.loginOnChange}/><br></br>
            <input pastprojects='pastProjects' type='text' placeholder='past projects?' value={this.state.pastProjects} onChange={this.loginOnChange}/><br></br>
            <input genre='pastProjects' type='text' placeholder='what genre?' value={this.state.genre} onChange={this.loginOnChange}/><br></br>
            
            <input type='submit' value='Signup'/>
            </form>
        {/* {sessions} */}
      </div>
    );
  }
}

export default withRouter (App);