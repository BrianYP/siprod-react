import './Navbar.css';
import logo from '../../assets/LogoSiprod.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu_icon.png'
import User from '../../assets/user.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo de Siprod" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Menu</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programa</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre Nosotros</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contactanos</Link></li>
        <li><Link to=''className='btn'>Ingresa <img src={User} alt="" /></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
