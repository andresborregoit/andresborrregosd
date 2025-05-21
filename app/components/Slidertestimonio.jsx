'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "../statics/styles/portfolio.module.css"
import Image from 'next/image'

import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });
import stars from '../statics/images/stars.svg'
import stars4 from '../statics/images/stars4.svg'

export default function Slidertestimonio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0, // Iniciar con el primer slide
    centerPadding: '0px',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
           centerPadding: '0px',
          variableWidth: true,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
           centerPadding: '0px',
          variableWidth: true,
        }
      },
      {
        breakpoint: 955,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          
        }
      },
      {
        breakpoint: 699,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerPadding: '0px',

        }
      },
      {
        breakpoint: 375,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          initialSlide: 0, // Iniciar con el primer slide
          slidesToShow: 0.5,
          slidesToScroll: 1,
          variableWidth: true,
          centerPadding: '0px',

        }
      }
    ]
  };
  return (
    
      
      <Slider {...settings}>
 
                {data.map((d) => (
                  
                      <div key={d.name} className={` ${css.testimonios} `}>
                      <div className={`${css.nombre}`}><p className={`${css.nombrep}`}>{d.name}</p></div>
                      <div className={`${css.stars}`}><Image src={stars} className={` ${css.imgyop} ${css.starwi} `}></Image></div>
                      <div className={`${css.resenia}`}><p className={`${LexendD.className} ${css.reseniaP}`}>{d.review}</p></div>
                  </div>
                

       
           
          
        ))}

      </Slider>
      
      
  
  






      
  
  );
}

const data = [
  {
    name: `Juan`,
    img: `/students/John_Morgan.jpg`,
    review: `Andrés es un gran profesional, gestiono y soluciono los problemas de mi web con solvencia.`
  },
  {
    name: `Mirta`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `El trabajo de andres cumplio mis expectativas, destaco su calidez y buen trato.`
  },
  {
    name: `Pablo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Tuve problemas con mi hosting y Andrés lo resolvió todo. Excelente soporte técnico.`
  },
  {
    name: `Cecilia`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Gracias a Andrés mi tienda online funciona perfectamente. Siempre estuvo disponible para ayudarme cuando lo necesité..`
  },
  {
    name: `Jhonatan`,
    img: `/students/Mia_Williams.jpg`,
    review: `Actualizó mi sitio para que sea responsive y ahora se ve genial en celulares. Súper recomendado..`
  },

  
];