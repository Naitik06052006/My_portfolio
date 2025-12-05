import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import FooterNav from './Components/FooterNav';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      <FooterNav/>
    </div>
  )
}

export default App