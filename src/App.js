import './App.css';
import React from 'react';
import PersonalMessage from './components/PresonalMessage.js';
import DynamicList from './components/DynamicList.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalMessage/>
        <DynamicList/>
      </header>
    </div>
  );
}

export default App;
