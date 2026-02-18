import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

// Component Imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import BackgroundAnimation from './Components/BackgroundAnimation';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <BackgroundAnimation />
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
