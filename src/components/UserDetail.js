import React from 'react';

const UserDetail = (props) => {
    let user = props.users.map(user) => {
        console.log(props)
        return (
            <div>
                <h6>name - {users.name}</h6>
                <h6>skills - {users.skills}</h6>
                <h6>location - {users.location}</h6>
            </div>


        );
    }

    export default UserDetail;