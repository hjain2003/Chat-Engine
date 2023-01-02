import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import React from 'react'

const App = () => {
  return (
    <div style={{ fontFamily: 'Times New Roman' }}>
    <ChatEngine
      height="100vh"
			projectID='76e85257-48b6-4578-bfa0-8cd9ddc3d4e6'
			userName='hjain'
			userSecret='1234'
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
		/>
    </div>
  )
}

export default App;


