import React from 'react';
import List from './List';


function App(props) {

const list = props.store.lists.map( list => 

  <List id={list.id} header={list.header} cardIds={list.cardIds} store={props.store} />

//   <section id="list.id" className="List">
//    <header className="List-header">
//        <h2>{list.header}</h2>
//   </header>

//   <div className="List-cards">
//   </div>
      
// </section>
  );


  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        
      </header>
      {list}
    </main>
  );
}

export default App;

