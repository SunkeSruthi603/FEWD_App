import React, { useState } from 'react';
import CustomInput from './CustomInput';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h3>Your Name: {name}</h3>
      <CustomInput
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;

