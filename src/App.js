import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Box width='400px'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
