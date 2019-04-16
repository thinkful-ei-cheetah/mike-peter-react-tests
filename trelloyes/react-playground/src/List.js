import React from 'react';
import Card from './Card';


function List (props) {
    const allCards = props.store.allCards;

    const listCards = props.cardIds.map( id => 
        <Card title={allCards[id].title} content={allCards[id].content} />
        );


    return (
        <section id={props.id} className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
       </header>

       <div className="List-cards">
           <div>
           {listCards}
           {/* <Card title={allCards.a.title} content={allCards.a.content} /> */}
           </div>

       </div>
           
     </section>
        );
}


export default List;