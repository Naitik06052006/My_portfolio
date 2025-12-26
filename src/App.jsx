import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import FooterNav from './Components/FooterNav';
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
      <FooterNav />
      </motion.div>
    </div>
  )
}

export default App