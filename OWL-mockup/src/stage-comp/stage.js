import React from 'react';
import Actor from './actors';
import User from './user';

function Stage(props){


    const onStage = props.actors.map( person => {
        if (person.onStage) {
            return <Actor id={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />
        }
        return '';
    }
    
);

    return <section className="stage">
    
   {onStage}
    <User />
        
</section>
}

export default Stage;