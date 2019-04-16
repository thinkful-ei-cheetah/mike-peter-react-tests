import React from 'react';

import PList from './participant-comp/participantList';
import Stage from './stage-comp/stage';
import Chat from './chat-comp/chatbar'



function App(props) {

const pList = <PList people={props.store.participants} />
const stage = <Stage actors={props.store.participants}/>
const chat = <Chat />




  return (
    <main className='App'>
      <header className="App-header">
        <h1>OWL markup</h1>
       

    </header>
      {pList} 
      {stage}
      {chat}
    </main>
  );
}

export default App;