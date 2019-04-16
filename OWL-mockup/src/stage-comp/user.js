import React from 'react';

function User (props) {

    return  <div id='user' className='user'>
    <img src={props.avatar} alt="avatar"/>
        <h3>test User</h3>
        <p>this is user</p>
    </div> 

}

export default User;