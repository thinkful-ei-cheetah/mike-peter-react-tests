import React from 'react';
import Participant from './participant';
import './participantList.css';

function PList (props) {

    const onStage = props.people.map( person => {
        if (person.onStage) {
            return <Participant id={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />
        }
        return '';
    }
    
);

    const inSessionList = props.people.map( person => {
            if (person.inSession && !person.onStage) {
                return <Participant id={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />
            }
            return '';
        }
        
    );

    const notInSession = props.people.map( person => {
        if (!person.inSession) {
            return <Participant id={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />
        }
        return '';
    }
);


    return (
    <section className="List">
        <header className="List-header">
            <h2>participant list component</h2>
        </header>

        <div className="participant-list">
            <div>
            {onStage}
            </div>
            <div>
            {inSessionList}    
            </div>
            <div>
            {notInSession}
            </div>
            
        </div>
            
    </section>
        );
}


export default PList;