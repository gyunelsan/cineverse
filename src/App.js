import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { MovieDetail } from './components/pages/MovieDetail';
import { Movie } from './components/pages/Movie';
import { Tvshows } from './components/pages/Tvshows';
import { Pricing } from './components/pages/Pricing';
import Loader from './components/common/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie' element={<Movie />} />
              <Route path='/movie/:movieId' element={<MovieDetail />} />
              <Route path='/tvshows' element={<Tvshows />} />
              <Route path='/pricing' element={<Pricing />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
