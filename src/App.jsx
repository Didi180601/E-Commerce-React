import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

import HomePages from "./pages/HomePages";
import CoursePage from "./pages/CoursePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

import "./index.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
