import { useState } from 'react';
import './App.css';
import ToggleSwitch from './ToggleSwitch';
import './ToggleSwitch.css';

function App() {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <>
      <ToggleSwitch isToggle={isToggle} handleToggle={handleToggle} />
    </>
  );
}

export default App;
