import React from 'react';

function Participant(props) {
    if (props.inSession) {
        if(props.onStage) {
            return (
                <div id={props.id} className='participant'>
                <img src={props.avatar} alt="avatar"/>
                    <h3>{props.name}</h3>
                    <p>on stage</p>
                </div> 
            );
        }

        return (
        <div id={props.id} className='participant'>
        <img src={props.avatar} alt="avatar" />
            <h3>{props.name}</h3>
            <p>in session</p>
        </div>
        );
    }
    else {
        return (
            <div id={props.id} className='participant'>
            <img src={props.avatar} alt="avatar" />
                <h3>{props.name}</h3>
                <p>Left session</p>
            </div>
            );
    }




    }




export default Participant;
