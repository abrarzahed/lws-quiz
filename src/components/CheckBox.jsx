export default function CheckBox(props) {
  return (
    <label className={props.className}>
      <input type="checkbox" />
      <span> {props.text}</span>
    </label>
  );
}
