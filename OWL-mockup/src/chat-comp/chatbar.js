import React from 'react';

import Input from './chatInput';
import Message from './messages';
import Reaction from './reactions';


function Chat(props){


    return <section className="chat-bar">
    <div>this is the char bar</div>
    
    <Message />
    <Reaction />
    <Input />

</section>
}

export default Chat;