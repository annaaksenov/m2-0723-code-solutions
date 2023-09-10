import { useState } from 'react';
export default function RegistrationFormControlled() {
  const [isUsername, setUsername] = useState('');
  const [isPassword, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(isUsername, isPassword);
  }
  function handleChange(event) {
    let isUsername = event.target.isUsername;
    let isPassword = event.target.isPassword;
    if (isUsername) {
      setUsername(isUsername);
    }
    if (isPassword) {
      setPassword(isPassword);
    }
  }
  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          id="usrnm"
          name="username"
          onChange={handleChange}></input>
      </label>
      <label>
        Password:
        <input
          type="text"
          id="psswrd"
          name="password"
          onChange={handleChange}></input>
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
