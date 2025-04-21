import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleChange} />
      <p>You typed: {name}</p>
    </form>
  );
}

export default NameForm;