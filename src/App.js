import Layout from "./components/layouts/Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Projects from "./components/pages/Projects.js";
import ContactUs from "./components/pages/ConactUs";
import PageNotFound from "./components/pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;