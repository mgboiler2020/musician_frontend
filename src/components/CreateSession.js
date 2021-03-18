import React from 'react';
import Button from 'react-bootstrap/Button';

function CreateSession (props) {
    // console.log(props);
  return (
    <div>
      

      <div className='App'>
        <div className='createSessionForm'>
        <br></br>
        <h4>Create a Session</h4>
        <p>(Enter your session info below)</p>
        <form onSubmit={props.createSession}>
            <input name='sessionName' type='text' placeholder='session name' onChange={props.loginOnChange}/><br></br>           
            <input name='sessionDate' type='text' placeholder='session date' onChange={props.loginOnChange}/><br></br>
            <input name='sessionLocation' type='text' placeholder='session location' onChange={props.loginOnChange}/><br></br> 
            <input name='genre' type='text' placeholder='genre' onChange={props.loginOnChange}/>
            <br></br>
            <br></br>
            <Button variant='success' type='submit'>
              Create Session
            </Button>
            {/* <input type='submit' value='Create Session'/> */}
            <br></br>
        </form>
      </div>
    </div>
   </div> 
  )
}

export default CreateSession;