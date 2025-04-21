import React, { useState } from 'react';

function Preferences() {
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState('');

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        /> Accept Terms
      </label>

      <div>
        <label>
          <input 
            type="radio" 
            value="male" 
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          /> Male
        </label>

        <label>
          <input 
            type="radio" 
            value="female" 
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          /> Female
        </label>
      </div>

      <p>
        Terms Accepted: {checked ? 'Yes' : 'No'}, Gender: {gender}
      </p>
    </div>
  );
}

export default Preferences;