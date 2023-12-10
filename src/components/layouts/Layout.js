import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Modal from "../UI/Modal.js";

import "./Layout.css";

function Layout(props) {
    // Properties --------------
    // Hooks -------------------
    // Context -----------------
    // Methods -----------------
    // View --------------------
    return (
        <Modal.Provider>
            <div className="centerpane">
                <Header />
                <Navbar />
                <main>
                    {props.children}
                </main>
                <Footer />
            </div>
        </Modal.Provider>
    )
}

export default Layout;