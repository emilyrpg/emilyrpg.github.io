// Where the app is being called from to be viewed in app
import Home from './pages/Home';

import About from './pages/About';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element ={<About />} />
            <Route path="/login" element ={<Login />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
