import React from 'react'
import css from "../statics/styles/hero.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
import Image from 'next/image'
import compu from '../statics/images/compu.svg'
import Header from '../components/Header'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });
import Sliderservtitu from "../components/Sliderservtitu";
import Sobremi from '../components/Sobremi'


export default function Hero() {
  return (
    <div className={`${css.containerTotal} ${css.tuti} `}>

    <div className={`${css.containerHero}  `}>
        <div className={css.textoHero}>
            <div className={css.containertextohero}><h1 className={` ${LexendZ.className} ${css.texto} `}>Tu solución esta acá</h1></div>


        </div>
        <div className={css.compuOrnamento}>
            <Image src={compu}></Image>
        </div>
    </div>

    <div className={`${css.containerServicios}  `}>
      <div id="servicios" className='serviciosTitulo'><h3 className={` ${LexendZ.className} ${css.servicioTexto} ${css.textalign}  `}>Servicios</h3></div>
    
    </div>

    <Sliderservtitu></Sliderservtitu>
    

    <div id="sobre-mi" className={`${css.containerSobremi}  `}>
      
      
      <Sobremi></Sobremi>
    </div>
    

  </div>
  )
}
