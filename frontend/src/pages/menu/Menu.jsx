import { useState } from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Programs from '../../components/Programs/Programs.jsx'
import Title from '../../components/Title/Title.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import './Menu.css'
import About from '../../components/About/About.jsx'
import Campus from '../../components/Campus/Campus.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx'

const Menu = () => {

    const[playState, setPlayState] = useState(false);

  return (
    <div>
        <Navbar />
        <Hero />
        <div className='container'>
            <Title subTitle='Nuestros Programas' title='Que Ofrecemos'/>
            <Programs />
            <About setPlayState={setPlayState}/>
            <Title subTitle='Galleria' title='Campus Fotos'/>
            <Campus />
            <Title subTitle='Testimonios' title='Lo que Nuestros Clientes dicen'/>
            <Testimonials />
            <Title subTitle='Contactanos' title='Ponte en Contacto'/>
            <Contact />
            <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default Menu