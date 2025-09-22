import { useState } from "react";
import CounterDisplay from "../../components/molecules/CounterDisplay/CounterDisplay";

function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h1>Home Page</h1>
      <CounterDisplay 
        count={count} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
      />
    </div>
  );
}

export default Home;
