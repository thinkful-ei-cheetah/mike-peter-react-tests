import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './participant';

import STORE from '../store.js';

//this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Participant id={STORE.participants[0].id} avatar={STORE.participants[0].avatar} name={STORE.participants[0].name} inSession={STORE.participants[0].inSession} onStage={STORE.participants[0].onStage} />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Participant id={STORE.participants[0].id} avatar={STORE.participants[0].avatar} name={STORE.participants[0].name} inSession={STORE.participants[0].inSession} onStage={STORE.participants[0].onStage} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});

it('renders the UI as expected with no unreads', () => {
  const tree = renderer
    .create(<Participant id={STORE.participants[0].id} avatar={STORE.participants[0].avatar} name={STORE.participants[0].name} inSession={STORE.participants[0].inSession} onStage={STORE.participants[0].onStage} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});