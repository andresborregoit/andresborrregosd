import React from 'react'
import css from "../statics/styles/portfolio.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
import Image from 'next/image'
import compu from '../statics/images/compu.svg'
import Header from '../components/Header'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });
import orizq from '../statics/images/ornaizq.svg' 
import order from '../statics/images/ornader.svg' 
import stars from '../statics/images/stars.svg'
import stars4 from '../statics/images/stars4.svg'
import Slidertestimonio from '../components/Slidertestimonio'
export default function Hero() {
  return (
    <div className={`${css.containerTotalPortfolio} ${css.tuti} `}>
        <div id="portfolio" className={` ${css.divPortfolio}`}>
            <h2 className={`${LexendZ.className} ${css.miportfolio}`} >Mi portfolio aqui</h2>
        </div>
        <div className={`${css.divBtn}`}><button className={`${css.btnPortfolio}`}><p className={`${css.btnp}`}>Ver Portfolio</p></button></div>
        <div className={`${css.divOrnamento}`}>
            <div className={`${css.ornamentoIzq}`}><Image src={orizq} className={`${css.imgyop}`}></Image>
            </div>
            <div className={`${css.ornamentoDer}`}><Image src={order} className={`${css.imgyop}`}></Image>
            </div>
        </div>


        <div className={`${css.containerTestimonios}  `}>
    <div id="testimonios" className='serviciosTitulo'><h3 className={` ${LexendZ.className} ${css.testimoniosTexto} `}>Testimonios</h3></div>
    <Slidertestimonio></Slidertestimonio>


    </div>


</div>
)
}
