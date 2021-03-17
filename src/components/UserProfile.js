import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

const UserProfile = (props) => {
    console.log(props.users);
 
    const users = props.users.map((users) => {
        return (
            <div className='grid-list' key={users.id} onClick={(e) => {props.selectUserById(e, users.id)}}>
                <div1>
                <h6>NAME - {users.name}</h6>
                <h6>SKILLS - {users.skills}</h6>
                <h6>ALBUMS - "{users.pastProjects}"</h6>
                </div1>
                <br></br>
            </div>
        );
    
        });
        return (
            <div>
            {users}
            </div>
        )
        
    }
export default UserProfile;

