import React from 'react';

function CustomInput(props) {
  return (
    <input
      type={props.type || "text"}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default CustomInput;