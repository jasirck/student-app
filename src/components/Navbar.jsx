import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <NavLink className="navbar-brand" to="/">
          Student Portal
        </NavLink>

        <div className="navbar-nav ms-auto">

          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/students">
            Students
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;