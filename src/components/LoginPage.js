import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function LoginPage (props) {
    // console.log(props);
  return (
    <div>
      

      <div className='App'>
      <h6>Login</h6>
        <form onSubmit={props.login}>
          <input
            name='username'
            type='text'
            placeholder='enter username'
            value={props.username}
            onChange={props.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='enter password'
            value={props.password}
            onChange={props.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        
      </div>
    </div>
    
  )
}

export default LoginPage;

