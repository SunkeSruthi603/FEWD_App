import React, { useState } from 'react';

function HoverBox() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{ padding: '20px', backgroundColor: hovered ? 'lightblue' : 'lightgray' }}
    >
      {hovered ? 'Mouse is over!' : 'Hover over me'}
    </div>
  );
}

export default HoverBox;