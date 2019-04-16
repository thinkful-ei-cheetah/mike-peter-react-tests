import React from 'react';
import Participant from './participant';


function PList (props) {

    const peopleList = props.people.map( person => 
            <Participant id={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />
        );


    return (
    <section className="List">
        <header className="List-header">
            <h2>participant list component</h2>
        </header>

        <div className="participant-list">
            <div>
            {peopleList}    
            </div>
            
        </div>
            
    </section>
        );
}


export default PList;