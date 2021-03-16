import React,{Component} from 'react';
import axios from 'axios';
// import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

function HomePage (props) {
  return (
    <div>
      <p>Testing</p>
      {/* {session.sessionName} */}

      <div className='App'>
      
        <h3>Login</h3>
        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        <br></br>
        <h6>Sign Up</h6>
        <form onSubmit={this.signup}>
          <input name='name' type='text' placeholder='name'/><br></br>
          <input username='username' type='text' placeholder='new username' value={this.state.username} onChange={this.loginOnChange}/><br></br>
            <input password='password' type='text' placeholder='new password' value={this.state.password} onChange={this.loginOnChange}/><br></br>
            <input location='location' type='text' placeholder='your location' value={this.state.location} onChange={this.loginOnChange}/><br></br>
            <input skills='skills' type='text' placeholder='list your skills' value={this.state.skills} onChange={this.loginOnChange}/><br></br>
            <input currentprojects='currentProjects' type='text' placeholder='current projects?' value={this.state.currentProjects} onChange={this.loginOnChange}/><br></br>
            <input pastprojects='pastProjects' type='text' placeholder='past projects?' value={this.state.pastProjects} onChange={this.loginOnChange}/><br></br>
            <input genre='pastProjects' type='text' placeholder='what genre?' value={this.state.genre} onChange={this.loginOnChange}/><br></br>
            
            <input type='submit' value='Signup'/>
            </form>
        {/* {sessions} */}
      </div>
    );
  {/* }
} */}
        {/* {sessions} */}
      </div>
    // </div>
  )
}
// function HomePage (props) {
//   return (
//     <div>
//       <form onSubmit={this.login}>
//           <input
//             name='username'
//             type='text'
//             placeholder='username'
//             value={props.username}
//             onChange={props.loginOnChange}
//           />
//           <input
//             name='password'
//             type='password'
//             placeholder='password'
//             value={props.password}
//             onChange={props.loginOnChange}
//           />
//           <input type='submit' value='Login' />
//         </form>
//         <form onSubmit={props.login}>
//           <input
//             name='username'
//             type='text'
//             placeholder='username'
//             value={props.username}
//             onChange={props.loginOnChange}
//           />
//           <input
//             name='password'
//             type='password'
//             placeholder='password'
//             value={props.password}
//             onChange={props.loginOnChange}
//           />
//           <input type='submit' value='Login' />
//         </form>
//     </div>
//   )
// }





export default HomePage;