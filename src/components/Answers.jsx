import classes from "../styles/Answers.module.css";

import CheckBox from "./CheckBox";

export default function Answers() {
  const checkBoxJsx = [];
  for (let i = 0; i < 10; i++) {
    checkBoxJsx.push(
      <CheckBox key={i} text="dummy text" className={classes.answer} />
    );
  }
  return (
    <div className={classes.answers}>
      {/* <CheckBox text="A New Hope 1" className={classes.answer} /> */}
      {checkBoxJsx}
    </div>
  );
}
