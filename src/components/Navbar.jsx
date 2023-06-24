import { NavLink } from "react-router-dom";
import classes from "../styles/navbar.module.css";

const className = ({ isActive }) => (isActive ? classes.active : undefined);

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navCenter}>
        <span className={classes.logo}>MixMaster</span>
        <div className={classes.navLinks}>
          <NavLink to="/" className={className}>
            Home
          </NavLink>
          <NavLink to="/about" className={className}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
