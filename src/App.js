import './App.css';
import React from 'react';
import PersonalMessage from './components/PresonalMessage.js';
import DynamicList from './components/DynamicList.js';
import Hooks from './components/Hooks.js';
import NameForm from './components/NameForm.js';
import SubmitForm from './components/SubmitForm.js';
import HoverBox from './components/Hovering.js';
import Preferences from './components/Checking.js';
import WindowWidth from './components/Effect_react.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalMessage/>
        <Hooks/>
        <NameForm/>
        <SubmitForm/>
        <HoverBox/>
        <Preferences/>
        <WindowWidth/>
        <DynamicList/>
      </header>
    </div>
  );
}

export default App;
