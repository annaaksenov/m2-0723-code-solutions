import { useState } from 'react';
import './App.css';

function HotButton() {
  const [count, setCount] = useState(0);
  const [isColor, setColor] = useState('purple');
  function handleHotButton() {
    setCount(count + 1);
    if (count >= 5) {
      setColor('lavender');
    }
    if (count >= 8) {
      setColor('pink');
    }
    if (count >= 11) {
      setColor('orange');
    }
    if (count >= 14) {
      setColor('yellow');
    }
    if (count >= 17) {
      setColor('white');
    }
  }
  return (
    <>
      <button className={isColor} onClick={handleHotButton}>
        Hot Button
      </button>
      <p>{count}</p>
    </>
  );
}

function App() {
  return (
    <>
      <HotButton />
    </>
  );
}

export default App;
