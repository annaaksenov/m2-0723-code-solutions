import { useState } from 'react';

export default function Button() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}>
        Down
      </button>
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}>
        Up
      </button>
    </>
  );
}
