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
import CustomInput from './components/CustomInput.js';
import CustomInput_comp from './components/CustomInput_comp.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalMessage/>
        <Hooks/>
        <CustomInput/>
        <CustomInput_comp/>
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
