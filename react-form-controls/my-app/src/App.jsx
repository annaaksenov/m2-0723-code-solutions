import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <>
      <div>
        <h3>
          <RegistrationFormUncontrolled />
        </h3>
        <h3>
          <RegistrationFormControlled />
        </h3>
      </div>
    </>
  );
}

export default App;
