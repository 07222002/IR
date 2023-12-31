import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Onboarding from './components/onboarding';
import Signup from './components/signup';
import About from './components/about/about';
import Blog from './components/blogPage/blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
