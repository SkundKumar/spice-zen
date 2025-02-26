import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import CategoryPage from './CatagoryPage';
import MainCourse from './pages/MainCourse';
import Biryani from './pages/Biryani';
import Special from './pages/Special';
import Dinner from './pages/Dinner';
import Lunch from './pages/Lunch';
import Naan from './pages/Naan';
import Drinks from './pages/Drinks';
import Starters from './pages/Starter';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/category/biryani" element={<Biryani />} />
        <Route path="/category/special" element={<Special />} />
        <Route path="/category/dinner" element={<Dinner />} />
        <Route path="/category/lunch-menu" element={<Lunch />} />
        <Route path="/category/naan/breads" element={<Naan />} />
        <Route path="/category/beverage" element={<Drinks />} />
        <Route path="/category/starters" element={<Starters />} />
      </Routes>
    </Router>
  );
}

export default App;
