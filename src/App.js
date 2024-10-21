import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'; // Correct path to Header component
import Footer from './components/Footer'; // Correct path to Header component
import Home from './pages/Home'; // Correct path to Header component
import About from './pages/About'; // Correct path to Header component
import Contact from './pages/Contact'; // Correct path to Header component

function App() {
  return (
    <Router>
     <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home */}
            <Route path="/about" element={<About />} /> {/* Route for About */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
