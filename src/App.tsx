import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
const Home = lazy(() => import('./Home'));
const Menu = lazy(() => import('./Menu'));

const Biryani = lazy(() => import('./pages/Biryani'));
const Special = lazy(() => import('./pages/Special'));
const Dinner = lazy(() => import('./pages/Dinner'));
const Lunch = lazy(() => import('./pages/Lunch'));
const Naan = lazy(() => import('./pages/Naan'));
const Drinks = lazy(() => import('./pages/Drinks'));
const Starters = lazy(() => import('./pages/Starter'));
const Bento = lazy(() => import('./pages/Bento'));
const Galary = lazy(() => import('./pages/Galary'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div >Loading.......</div>}>
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
          <Route path="/category/bento" element={<Bento />} />
          <Route path="/gallery" element={<Galary />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
