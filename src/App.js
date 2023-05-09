import Home from './pages/Home';

import About from './pages/About';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element ={<About/>} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
