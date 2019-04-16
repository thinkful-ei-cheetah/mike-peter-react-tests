import React from 'react';

import PList from './participant-comp/participantList';


function App(props) {

const pList = <PList people={props.store.participants} />




  return (
    <main className='App'>
      <header className="App-header">
        <h1>OWL markup</h1>
       

    </header>
      {pList} 
      
    </main>
  );
}

export default App;