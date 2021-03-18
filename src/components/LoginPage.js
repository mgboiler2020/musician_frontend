import React from 'react';
import {FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage(props) {
  // console.log(props);
  return (
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

