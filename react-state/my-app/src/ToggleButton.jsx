import { useState } from 'react';

export default function ToggleButton(props) {
  const [isClicked, setClicked] = useState(false);
  console.log('useState:', `${isClicked}`);
  let text = props.text;
  let color = props.className;

  function handleClick() {
    console.log('before setter:', `${isClicked}`);
    setClicked(!isClicked);
    console.log('after setter:', `${isClicked}`);
  }
  if (isClicked) {
    return (
      <button className={color} onClick={handleClick}>
        {text}
      </button>
    );
  }
  return <button onClick={handleClick}>{text}</button>;
}
