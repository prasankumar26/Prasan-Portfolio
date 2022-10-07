import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
