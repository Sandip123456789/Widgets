import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>
      <h1>Current count: {count}</h1>
    </div>
  );
};

export default Counter;
