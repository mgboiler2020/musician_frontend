import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations';

const BandProfile = (props) => {
    console.log(props.bands);
 
    const bands = props.bands.map((bands) => {
        return (
           
            <div className='bands-grid-list' key={bands.id} onClick={(e) => {props.selectBandById(e, bands.id)}}>
                <h5>Band Info</h5>
                
                <h6>NAME - {bands.bandName}</h6>
                <h6>LOCATION - {bands.location}</h6>
                <h6>SHOWS - {bands.showDates}</h6>
                <h6>ALBUMS - {bands.pastProjects}</h6>
                <br></br>
            </div>
        );
    
        });
        return (
            <div>
            {bands}
            </div>
        )
        
    }


    
    
        
  

    
  

export default BandProfile;

