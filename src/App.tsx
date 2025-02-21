import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import CategoryPage from './CatagoryPage';
import MainCourse from './pages/MainCourse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/category/main-course" element={<MainCourse />} />

      </Routes>
    </Router>
  );
}

export default App;
