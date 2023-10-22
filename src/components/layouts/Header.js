import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
    // Properties --------------
    // Hooks -------------------
    // Context -----------------
    // Methods -----------------
    // View --------------------
    return (
        <header>
            <Link to="/">
                <img src="https://img.icons8.com/ios/50/timer.png"></img>
            </Link>
            <Link to="/">
                <h1>React First Build</h1>
            </Link>
            <div className="login">
                <p>Welcome</p>
            </div>
        </header>
    )
}

export default Header;