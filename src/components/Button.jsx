import classes from "../styles/Button.module.css";

export default function Button(props) {
  return <div className={classes.button}>{props.children}</div>;
}
