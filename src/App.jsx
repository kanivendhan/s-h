import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Soap from './Components/Soap';
import Shampoo from './Components/Shampoo';
import Search from './Components/Search';
import Login from './Components/Login';

function App() {

  return (
    <>
    <Router>
        <Navbar />
        
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="/soap" element={<Soap/>}/>
          <Route path="/shampoo" element={<Shampoo/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
   
    </>
  )
}

export default App
