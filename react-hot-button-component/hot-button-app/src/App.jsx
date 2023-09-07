/*{import { useState } from 'react'}*/
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function HotButton(props) {
  /*{const [count, setCount] = useState(0);}*/
  let color = props.className;

  return (
    <button className={color} onClick={props.handleHotButton}>
      Hot Button
    </button>
  );
}

function App() {
  /*{const [count, setCount] = useState(0)}*/
  /*{function handleHotButton() {
    setCount(count + 1)
    if(count > 3) {
    }
  }}*/

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
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>*/}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <HotButton className="purple" onClick="handleHotButton" />
    </>
  );
}

export default App;
