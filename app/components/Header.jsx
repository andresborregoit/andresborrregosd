import React from 'react'
import css from "../statics/styles/header.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ["latin"] });


export default function Header() {
  return (
    <div className={`${css.divHeader}`}>
        <ul className={css.listaul}>
        <li className={` ${jost.className} text-4xl font-light p-2`}><p className={`${css.pheader}`}>Servicios</p></li>
        <li className={` ${jost.className} text-4xl font-light p-2`}><p className={`${css.pheader}`}>Sobre mi</p></li>
        <li className={` ${jost.className} text-4xl font-light p-2`}><p className={`${css.pheader}`}>Portfolio</p></li>
        <li className={` ${jost.className} text-4xl font-light p-2`}><p className={`${css.pheader}`}>Testimonios</p></li>
        <li className={` ${jost.className} text-4xl font-light p-2`}><p className={`${css.pheader}`}>Contacto</p></li>
        </ul>
        </div>
  )
}
