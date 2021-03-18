import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import {FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function LoginPage(props) {
  // console.log(props);
  return (
    //     <div>


    //       <div className='App'>
    //       <h6>Login</h6>
    //         <form onSubmit={props.login}>
    //           <input
    //             name='username'
    //             type='text'
    //             placeholder='enter username'
    //             value={props.username}
    //             onChange={props.loginOnChange}
    //           />
    //           <br></br>
    //           <br></br>
    //           <input
    //             name='password'
    //             type='password'
    //             placeholder='enter password'
    //             value={props.password}
    //             onChange={props.loginOnChange}
    //           />
    //           <input type='submit' value='Login' />
    //         </form>

    //       </div>
    //     </div>

    //   )
    // }
    <div>


      <div className='App'>

        <div className='bootForm'>
          <h3>Login</h3>

          <Form onSubmit={props.login}>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <FormControl type="text" name="username" value={props.username}
                onChange={props.loginOnChange}
              />
            </Form.Group>
            
           
            <br></br>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <FormControl type="text" name="password" value={props.username}
                onChange={props.loginOnChange}
              />
            </Form.Group>
            <Button variant='success' type='submit'>
              Login
    </Button>
          </Form>
        </div>
      </div>
    </div>

  )
}


export default LoginPage;

