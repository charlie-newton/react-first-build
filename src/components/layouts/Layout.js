import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

import "./Layout.css";

function Layout(props) {
    // Properties --------------
    // Hooks -------------------
    // Context -----------------
    // Methods -----------------
    // View --------------------
    return (
        <div className="centerpane">
            <Header />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;