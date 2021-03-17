import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function CreateSession (props) {
    // console.log(props);
  return (
    <div>
      

      <div className='App'>
      
        <br></br>
        <h6>Create a Session</h6>
        <form onSubmit={props.createSession}>
            <input name='sessionName' type='text' placeholder='session name' onChange={props.loginOnChange}/><br></br>           
            <input name='sessionDate' type='text' placeholder='session date' onChange={props.loginOnChange}/><br></br>
            <input name='sessionLocation' type='text' placeholder='session location' onChange={props.loginOnChange}/><br></br> 
            <input name='genre' type='text' placeholder='genre' onChange={props.loginOnChange}/>
            <br></br>
            <br></br>
            <input type='submit' value='Create Session'/>
            <br></br>
        </form>
      </div>
    </div>
    
  )
}

export default CreateSession;