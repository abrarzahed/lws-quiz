import classes from "../styles/Nav.module.css";
import Account from "./Account";

import { Link } from "react-router-dom";
import logo from "../assets/logo-bg.png";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
