export default function ToggleSwitch(props) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={props.handleToggle} />
        <span className="slider"></span>
      </label>
      <p>{props.isToggle ? 'OFF' : 'ON'}</p>
    </>
  );
}
