export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const usrnm = document.querySelector('#usrnm').value;
    const psswrd = document.querySelector('#psswrd').value;
    const formData = new FormData();
    formData.append('username:', usrnm);
    formData.append('password:', psswrd);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}`, `${pair[1]}`);
    }
  }
  return (
    <form>
      <label>
        Username:
        <input type="text" id="usrnm" name="username"></input>
      </label>
      <label>
        Password:
        <input type="text" id="psswrd" name="password"></input>
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
