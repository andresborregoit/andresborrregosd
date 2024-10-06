import React from 'react'
import Form from "../components/Form";

import css from "../statics/styles/Footer.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={`${css.container}`}>
    <div  className={`${css.estructura}`}>
        <div  className={`${css.divh1}`}><h1 id="contacto"  className={`${LexendZ.className} ${css.contactame}`}>Contactame</h1></div>
        <div  className={`${css.subcontainer}`}>
            <div className={`${css.div1}`}>
                <h2 className={`${LexendZ.className} ${css.f70}`}>Andrés Borrego</h2>
                <h4 className={`${LexendD.className} ${css.f30} ${css.padtext}`}>Completa el formulario de contacto y nos estaremos comunicando contigo a la brevedad.</h4>
                <h4 className={`${LexendD.className} ${css.f30} ${css.padtext}`}>andresborregoit@gmail.com</h4>
                <h4 className={`${LexendD.className} ${css.f30} ${css.padleft}`}>
                <a 
          href="https://wa.me/5492314570388?text=%C2%A1Hola!%20Me%20interesan%20tus%20soluciones%20digitales%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20podr%C3%ADas%20ayudarme."
          target="_blank" 
          rel="noopener noreferrer"
          className={`${LexendD.className} ${css.btnCardP}`}>+54 9 2314-570388</a>
                </h4>
            </div>
            <div className={`${css.div2}`}>
                <Form></Form>

            </div>
            
        </div>
        <div className={`${css.containerfinal}`}>
                <p className={`${css.pfinal1}`}>Diseñado y programado por Andrés Borrego</p>
                <p className={`${css.pfinal2}`}>© Todos los derechos reservados</p>
            </div>
    </div>
    
    
    
    </div>
  

)
}
