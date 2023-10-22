import Header from "./Header.js";
import Footer from "./Footer.js";

function Layout(props) {
    // Properties --------------
    // Hooks -------------------
    // Context -----------------
    // Methods -----------------
    // View --------------------
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;