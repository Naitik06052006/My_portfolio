import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Skills from '../Components/Skills'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Work />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home