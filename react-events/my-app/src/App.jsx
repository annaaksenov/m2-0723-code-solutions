import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomButton from './CustomButton';
import './CustomButton.css';

function App() {
  const [count, setCount] = useState(0);
  function handleCustomClick() {
    window.alert('clicked');
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <CustomButton
          text="I"
          className="color-red"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="know"
          className="color-blue"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="React!"
          className="color-green"
          onCustomClick={handleCustomClick}
        />
      </div>
    </>
  );
}

export default App;
