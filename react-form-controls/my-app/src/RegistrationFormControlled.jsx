import { useState } from 'react';
export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Controlled state:', { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="usrnm"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="passwrd"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
