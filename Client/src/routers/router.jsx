import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import SeatLayout from '../pages/SeatLayout';
import MyBookings from '../pages/MyBookings';
import Favourite from '../pages/Favourite';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/:id/:date" element={<SeatLayout />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  );
};

export default Router;