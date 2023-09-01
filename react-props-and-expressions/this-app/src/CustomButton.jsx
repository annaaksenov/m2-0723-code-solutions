export default function CustomButton(props) {
  let text = props.text;
  let className = props.className;
  return <button className={className}>{text}</button>;
}
