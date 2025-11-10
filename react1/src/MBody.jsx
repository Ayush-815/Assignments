import React, { useState } from 'react';

function MBody() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Welcome to your first React app!</p>
      <p>Button clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click!!!</button>
    </div>
  );
}

export default MBody;
