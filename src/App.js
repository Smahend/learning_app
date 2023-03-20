import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cources from "./pages/Cources";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
