import React from 'react';
import Button from 'react-bootstrap/Button';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function CreateBand(props) {
  // console.log(props);
  return (
    <div>


      <div className='App'>
        <div className='createBandForm'>
          <br></br>
          <h4>Create Your Band Profile</h4>
          <p>(Enter your info below)</p>
          <form onSubmit={props.createBand}>
            <input name='bandName' type='text' placeholder='band name' onChange={props.loginOnChange} /><br></br>
            <input name='showDates' type='text' placeholder='showDates' onChange={props.loginOnChange} /><br></br>
            <input name='location' type='text' placeholder='band location' onChange={props.loginOnChange} /><br></br>
            <input name='currentProjects' type='text' placeholder='current projects?' onChange={props.loginOnChange} /><br></br>
            <input name='pastProjects' type='text' placeholder='any albums?' onChange={props.loginOnChange} /><br></br>
            <input name='genre' type='text' placeholder='genre' onChange={props.loginOnChange} />
            <br></br>
            <br></br>
            <Button variant='success' type='submit'>
              Create Band
            </Button>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBand;