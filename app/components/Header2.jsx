'use client'
import React, { useState, useEffect } from 'react';
import { Jost } from 'next/font/google';
import css from '../statics/styles/Header2.module.css';
import { Link } from 'react-scroll';

const jost = Jost({ subsets: ["latin"] });

const Header2 = () => {
  const [scrollY, setScrollY] = useState(0);           // Scroll
  const [isHovered, setIsHovered] = useState(false);   // Hover header
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu burger

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar estado del menú
  };

  return (
    <div className={css.containerheader}>
      <div
        className={`${css.divHeader} ${css.header} ${scrollY > 50 ? css.headerScrolled : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {scrollY > 50 && !isHovered ? (
          <div className={css.menuIcon} onClick={toggleMenu}>☰</div> // Icono de menú hamburguesa para scroll
        ) : (
          
          <ul className={`${css.listaul} ${isMenuOpen ? css.menuOpen : css.menuClosed}`}>
            {/* Links del menú */}

            <li className={`${jost.className} ${css.borderli} ${css.btop} cursor-pointer`}>
              <Link to="servicios" smooth={true} duration={500} offset={-70} className={`${css.pheader} ${css.linone} `}>
                Servicios
              </Link>
            </li>
            <li className={`${jost.className} ${css.borderli}  cursor-pointer`}>
              <Link to="sobre-mi" smooth={true} duration={500} offset={190} className={`${css.pheader} ${css.linone} `}>
                Sobre mí
              </Link>
            </li>
            <li className={`${jost.className} ${css.borderli}  cursor-pointer`}>
              <Link to="portfolio" smooth={true} duration={500} offset={5} className={`${css.pheader} ${css.linone} `}>
                Portfolio
              </Link>
            </li>
            <li className={`${jost.className} ${css.borderli}  cursor-pointer`}>
              <Link to="testimonios" smooth={true} duration={500} offset={-130} className={`${css.pheader} ${css.linone} `}>
                Testimonios
              </Link>
            </li>
            <li className={`${jost.className} ${css.borderli}  cursor-pointer`}>
              <Link to="contacto" smooth={true} duration={500} offset={-20} className={`${css.pheader} ${css.linone} `}>
                Contacto
              </Link>
            </li>
          </ul>
        )}
        
      
        <div className={css.pepeloco}><div className={css.pepelocohijo} onClick={toggleMenu}>☰</div></div>
      </div>
    </div>
  );
};

export default Header2;