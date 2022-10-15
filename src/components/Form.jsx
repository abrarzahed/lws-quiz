import classes from "../styles/Form.module.css";
export default function Form(props) {
  return (
    <form className={`${props.className} ${classes.form}`} action="#">
      {props.children}
    </form>
  );
}
