import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ValidateInput() {
  const [password, setPassword] = useState('');
  function handleChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={handleChange} />
      <span className="icon">
        {password.length < 8 ? (
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#ff2424' }} />
        ) : (
          <FontAwesomeIcon icon={faCheck} style={{ color: '#00c728' }} />
        )}
      </span>
      <p>
        {password.length === 0
          ? 'A password is required.'
          : password.length < 8
          ? 'Your password is too short.'
          : ''}
      </p>
    </div>
  );
}
