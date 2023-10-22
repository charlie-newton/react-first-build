import Layout from "./components/layouts/Layout.js";

import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import ContactUs from "./components/pages/ConactUs";
import PageNotFound from "./components/pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;