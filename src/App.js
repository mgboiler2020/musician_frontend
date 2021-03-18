import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import BandProfile from './components/BandProfile';
import CreateBand from './components/CreateBand';
import SessionPage from './components/SessionPage';
import CreateSession from './components/CreateSession';
import LoginPage from './components/LoginPage';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

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
      bandName: '',
      showDates: '',
      location: '',
      sessionName: '',
      sessionDate: '',
      sessionLocation: '',
      id: [],
     


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
    const response = await axios.get('http://localhost:3001/session/all' || 'https://musicianbook-project4.herokuapp.com/session/all');
    // console.log(response);
    this.setState({
      sessions: response.data,
    });
  };
 
  getBandList = async () => {
    const response = await axios.get('http://localhost:3001/band/all' || 'https://musicianbook-project4.herokuapp.com/band/all');
    // console.log(response);
    this.setState({
      bands: response.data,
    });
  };

  getUserList = async () => {
    const response = await axios.get('http://localhost:3001/user/all' || 'https://musicianbook-project4.herokuapp.com/user/all');
    // console.log(response);
    this.setState({
      users: response.data
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
    // console.log(data);
    this.state.loggedIn = false
    this.state.signedIn = false
    const response = await axios.post('http://localhost:3001/user/login' || 'https://musicianbook-project4.herokuapp.com/user/login', data);
    const foundUser = response;
    // console.log(response);
    this.props.history.push(`/UserDetail/${foundUser}`); 
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
    const response = await axios.post('http://localhost:3001/user/signup' || 'https://musicianbook-project4.herokuapp.com/user/signup', data);
    // console.log(response);
    }

    createBand = async () => {
      const data = {
        bandName: this.state.bandName,
        showDates: this.state.showDates,
        location: this.state.location,
        currentProjects: this.state.currentProjects,
        pastProjects: this.state.pastProjects,
        genre: this.state.genre,
      };
      // const response = await axios.post('http://localhost:3001/band/createBand', data); 
      const response = await axios.post('https://musicianbook-project4.herokuapp.com/band/createBand', data);
    }

    createSession = async () => {
      const data = {
        sessionName: this.state.sessionName,
        genre: this.state.genre,
        sessionDate: this.state.sessionDate,
        sessionLocation: this.state.sessionLocation,
      };
      // const response = await axios.post('http://localhost:3001/session/createSession', data);
      const response = await axios.post('https://musicianbook-project4.herokuapp.com/createSession', data);
    }
    
    selectUserById = async (e,id)=> {
      e.preventDefault();
     
      // const selectUser = await axios.get('http://localhost:3001/user/select', id);
      const selectUser = await axios.get('https://musicianbook-project4.herokuapp.com/user/select', id);
     
      this.setState({
        selectUser: selectUser
          
      })
      this.props.history.push('/profile/' + id);
      
    }

  render() {
    
      
    return (
      <div className='App'>
        <header classname='header'>
          
          <div className='header1'>
          <h1>MusicianBook</h1>

            
            <Link className='return-to-HomePage' to="/">Sign Up</Link>
            <Link className='return-to-HomePage' to="/login">Login</Link>
            
            <Link className='return-to-HomePage' to="/all">User Profiles</Link>
            <Link className='return-to-HomePage' to="/bands">Band Profiles</Link>
            <Link className='return-to-HomePage' to="/sessions">Sessions Page</Link>
            
            <Link className='return-to-HomePage' to="/createBand">Create Band</Link>
            <Link className='return-to-HomePage' to="/createSession">Create Session</Link>
           
            <br></br>
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
            <Route exact path='/all' render={() => (
              <UserProfile getUserList={this.getUserList}
              selectUserById={this.selectUserById}
              users={this.state.users}/> 
            )} />
            <Route path='/sessions' render={() => (
              <SessionPage getSessionList={this.getSessionList}
              sessions={this.state.sessions}/> 
            )} />
            <Route exact path='/bands' render={() => (
              <BandProfile getBandList={this.getBandList}
              bands={this.state.bands}/> 
            )} />
             <Route exact path='/createBand' render={() => (
              <CreateBand createBand={this.createBand}
              loginOnChange={this.loginOnChange}
              bands={this.state.bands}/> 
            )} />
            <Route exact path='/createSession' render={() => (
              <CreateSession createSession={this.createSession}
              loginOnChange={this.loginOnChange}
              sessions={this.state.sessions}/> 
            )} />
          </main>
        
        
        
        
        
        
        
        
      </div>
    );
  }
}

export default withRouter(App);
