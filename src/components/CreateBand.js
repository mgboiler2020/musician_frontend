import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function CreateBand (props) {
    // console.log(props);
  return (
    <div>
      

      <div className='App'>
      
        <br></br>
        <h4>Create Your Band Profile</h4>
        <p>Enter your info below</p>
        <form onSubmit={props.createBand}>
            <input name='bandName' type='text' placeholder='band name' onChange={props.loginOnChange}/><br></br>           
            <input name='showDates' type='text' placeholder='showDates' onChange={props.loginOnChange}/><br></br>
            <input name='location' type='text' placeholder='band location' onChange={props.loginOnChange}/><br></br> 
            <input name='currentProjects' type='text' placeholder='current projects?'  onChange={props.loginOnChange}/><br></br>
            <input name='pastProjects' type='text' placeholder='any albums?' onChange={props.loginOnChange}/><br></br>
            <input name='genre' type='text' placeholder='genre' onChange={props.loginOnChange}/>
            <br></br>
            <br></br>
            <input type='submit' value='Create Band'/>
            <br></br>
        </form>
      </div>
    </div>
    
  )
}

export default CreateBand;