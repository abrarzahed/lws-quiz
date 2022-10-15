export default function CheckBox(props) {
  return (
    <label>
      <input type="checkbox" />
      <span> {props.text}</span>
    </label>
  );
}
