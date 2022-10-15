import classes from "../styles/TextInputStyles.module.css";

export default function TextInput(props) {
  return (
    <div className={classes.textInput}>
      <input type={props.type} placeholder={props.placeholder} />
      <span className="material-icons-outlined"> {props.icon}</span>
    </div>
  );
}
