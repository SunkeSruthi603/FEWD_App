/*import React, { Component } from 'react';

class ButtonClick extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>Count: 	{this.state.count}</p>
      </div>
    );
  }
}

*/
import React, { useState } from 'react';

function ButtonClick() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ButtonClick;
