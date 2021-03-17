import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

const SessionPage = (props) => {
    console.log(props.sessions);
 
    const sessions = props.sessions.map((sessions) => {
        return (
           
            

            <div className='session-grid-list' key={sessions.id} onClick={(e) => {props.selectSessionById(e, sessions.id)}}>
                <h5>Session Info</h5>
                
                <h6>NAME - {sessions.sessionName}</h6>
                <h6>LOCATION - {sessions.sessionLocation}</h6>
                <h6>DATE - {sessions.sessionDate}</h6>
                <br></br>
            </div>
        );
    
        });
        return (
            <div>
            {sessions}
            </div>
        )
        
    }


    
    
        
  

    
  

export default SessionPage;

