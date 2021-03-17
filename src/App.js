import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import BandProfile from './components/BandProfile';
import SessionPage from './components/SessionPage';
import LoginPage from './components/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      bands: [],
      users: [],
      name: '',
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
    this.signup();
    
  };
  getSessionList = async () => {
    const response = await axios.get('http://localhost:3001/session/all');
    // console.log(response);
    this.setState({
      sessions: response.data,
    });
  };
 
  getBandList = async () => {
    const response = await axios.get('http://localhost:3001/band/all');
    // console.log(response);
    this.setState({
      band: response.data,
    });
  };

  getUserList = async () => {
    const response = await axios.get('http://localhost:3001/user/all');
    // console.log(response);
    this.setState({
      users: response.data,
    });
  };

  loginOnChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    // console.log(e.target.value)
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
    // e.preventDefault();
    // console.log("signing up");
    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      location: this.state.location,
      skills: this.state.skills,
      currentProjects: this.state.currentProjects,
      pastProjects: this.state.pastProjects,
      genre: this.state.genre,
    };
    // console.log(data);
    const response = await axios.post('http://localhost:3001/user/signup', data);
    // console.log(response);
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
            <Link className='return-to-HomePage' to="/">Return to Home Page</Link><br></br>
            <Link className='return-to-HomePage' to="/login">Return to Login Page</Link>
          </div>
          </header>
          <main>
            <Route exact path='/' render={() => (
              <HomePage signup={this.signup}
              loginOnChange={this.loginOnChange}
                name={this.state.name}/> 
            )} />
            <Route exact path='/login' render={() => (
             <LoginPage login={this.login}
             loginOnChange={this.loginOnChange}/>
            )} />
            {/* <Route exact path='/all' render={() => (
              <UserProfile username={this.getUserList}/> 
            )} />
            <Route path='/all' render={() => (
              <SessionPage sessions={this.getSessionList}/> 
            )} />
            
             
            <Route exact path='/' render={() => (
              <BandProfile bands={this.getBandList}/> 
            )} /> */}
          </main>
        
        
        
        
        
        
        
        
      </div>
    );
  }
}

export default (App);


//use this as template when adding routers in app.js

// <Router history={browserHistory}>
//   <Route path='/' component={MasterPage}>
//   </Route>
// </Router>