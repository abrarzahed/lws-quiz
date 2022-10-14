/* eslint-disable no-undef */
import Nav from "../components/Nav";
import classes from "../styles/Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{props.children}</div>
      </main>
    </>
  );
}
