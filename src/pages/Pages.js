import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResult from './SearchResult';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:term" element={<SearchResult />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
