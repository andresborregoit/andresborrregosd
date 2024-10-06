'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "../statics/styles/Sliderservtitu.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });

export default function Sliderservtitu() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 699,
        settings: {
          centerMode: true,
           centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
           centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={` ${css.eldiv} mx-auto`}>
      <div className={css.magia}>
      <Slider {...settings}>

                {data.map((d) => (
                  
          <div key={d.name} className={` ${css.serviciosCard1} `}>
          <p className={` ${LexendD.className} ${css.tituloCard} `}>{d.name}</p>
          <p className={` ${LexendD.className} ${css.infoCard} `}>{d.review}</p>
          <div className={`${css.containerbtn} `}>
          <div className={` ${LexendD.className} ${css.btnCardDiv} `}>
          <a 
          href="https://wa.me/5492314570388?text=%C2%A1Hola!%20Me%20interesan%20tus%20soluciones%20digitales%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20podr%C3%ADas%20ayudarme."
          target="_blank" 
          rel="noopener noreferrer"
          className={`${LexendD.className} ${css.btnCardP}`}>Escribime</a>
          </div>
        </div>
        </div>
       
           
          
        ))}

      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `QR`,
    img: `/students/John_Morgan.jpg`,
    review: `Generación y diseño de códigos QR para comercios, restaurantes , bares  y eventos.`
  },
  {
    name: `Flyers`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Diseño y creación de flyers llamativos y efectivos para promocionar tus productos o servicios en las redes sociales.`
  },
  {
    name: `Desarrollo Web`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Diseño y desarrollo de páginas web personalizadas para todo tipo de negocios, institucionales, empresariales, e-comerce y mas.`
  },
  {
    name: `Emails`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Plantillas de correo electrónico: Creación de plantillas de correo electrónico profesionales para boletines y campañas de marketing.`
  },
  {
    name: `Soluciones digitales`,
    img: `/students/Mia_Williams.jpg`,
    review: `Soluciones digitales en general, gestión de archivos, edición de documentos, conversión de formatos, y soporte técnico básico.`
  },
  {
    name: `Micrositios`,
    img: `/students/Mia_Williams.jpg`,
    review: `Micrositios para Eventos: Desarrollo de pequeñas páginas web para eventos específicos como bodas, conferencias, etc.`
  },
  
];