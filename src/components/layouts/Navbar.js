import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    // Properties --------------
    // Hooks -------------------
    // Context -----------------
    // Methods -----------------
    const getLinkStyle = ({isActive}) => ( isActive ? "navSelected" : null);

    // View --------------------
    return (
        <nav>
            <div className="navItem">
                <NavLink to="/" className={getLinkStyle}>Home</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/signin" className={getLinkStyle}>Sign In</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/projects" className={getLinkStyle}>Projects</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/contact" className={getLinkStyle}>Contact Us</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;