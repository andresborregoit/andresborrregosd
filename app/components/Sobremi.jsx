import React from 'react'
import css from "../statics/styles/Sobremi.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
import Image from 'next/image'
import compu from '../statics/images/compu.svg'
import Header from '../components/Header'
import yo from '../../public/images/fotopersonal.svg'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });

export default function Sobremi() {
  return (
    <>
    
    <div  className={css.serviciosTitulo}><h3 className={` ${LexendZ.className} ${css.sobremiTexto} `}>Sobre mi</h3></div>
    <div className={` ${css.sobremidiv} `}>
        <div  className={` ${css.sobremiParrafo} `}>
          <div><p className={` ${css.sobremiP} ${LexendD.className} text-center`}>¡Hola! Soy Andrés Borrego, apasionado del diseño y desarrollo web. Soy ingenioso, veloz y siempre busco nuevas formas de crear soluciones digitales efectivas y atractivas. Me encanta explorar las opciones en cada proyecto, convencido de que no hay un único camino para lograr un resultado óptimo.

          </p></div>
          <div><p className={` ${css.sobremiP} ${LexendD.className} text-center`}>
          Considero que cada cliente es único, y por eso dedico tiempo a entender sus necesidades, brindándoles una atención personalizada.
          </p></div>
          <div><p className={` ${css.sobremiP} ${LexendD.className} text-center`}>
          Tengo sólidos conocimientos y experiencia en HTML, CSS, JavaScript, React, Next.js, Firebase y UX/UI.
          
          </p></div>

        </div>
        <div className={` ${css.sobremiImg} `}>
        <Image src={yo} className={`${css.imgyo}`}></Image>
        </div>
      </div>



    
    

  
  </>
  )
}
