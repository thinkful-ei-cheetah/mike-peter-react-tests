import React from 'react';


function Actor(props){


    return  <div id={props.id} className='actor'>
                <img src={props.avatar} alt="avatar"/>
                    <h3>{props.name}</h3>
                    <p>actor</p>
                </div> 
}

export default Actor