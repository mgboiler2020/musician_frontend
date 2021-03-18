import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';
import Button from 'react-bootstrap/Button';
function HomePage (props) {
    // console.log(props);
  return (
    <div>
      

      <div className='App'>
        <div className='signupForm'>
        <br></br>
        <h4>Sign Up</h4>
        <p>Enter your info below</p>
        <p>to create a new account</p>
        <p>or select 'Login' above</p>
        <form onSubmit={props.signup}>
            <input name='name' type='text' placeholder='name' onChange={props.loginOnChange}/><br></br>           
            <input name='username' type='text' placeholder='new username' onChange={props.loginOnChange}/><br></br>
            <input name='password' type='text' placeholder='new password' onChange={props.loginOnChange}/><br></br>
            <input name='location' type='text' placeholder='your location'  onChange={props.loginOnChange}/><br></br>
            <input name='skills' type='text' placeholder='list your skills'  onChange={props.loginOnChange}/><br></br>
            <input name='currentProjects' type='text' placeholder='current projects?'  onChange={props.loginOnChange}/><br></br>
            <input name='pastProjects' type='text' placeholder='any albums?' onChange={props.loginOnChange}/><br></br>
            <input name='genre' type='text' placeholder='genre' onChange={props.loginOnChange}/>
            <br></br>
            <br></br>
            <Button variant='success' type='submit'>
              Create Band
            </Button>
            {/* <input type='submit' value='Signup'/> */}
        </form>
      </div>
    </div>
  </div>
    
  )
}

export default HomePage;