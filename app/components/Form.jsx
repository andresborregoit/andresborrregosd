'use client'
import { useState } from 'react';

import css from "../statics/styles/Form.module.css"
import { Lexend_Deca } from 'next/font/google'
import { Lexend } from 'next/font/google'
import { Lexend_Zetta } from 'next/font/google'
const LexendD = Lexend_Deca({subsets:["latin"]})
const LexendZ = Lexend_Zetta({ subsets: ["latin"] });




export default function Home() {

  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, nombre, edad };

    try {
      const response = await fetch('/api/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('El email se envió correctamente');
        setEmail('');
        setNombre('');
        setEdad('');
      } else {
        alert('Hubo un error al enviar el email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el email');
    }
  };

  





  return (
    <div className={`${css.container}`}>
      <form onSubmit={handleSubmit} className={`${css.form}`}>
        <div className={`${css.inputgroup}`}>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            
            placeholder="Nombre"
            className={`${css.input} ${css.colorplace} ${LexendD.className}`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"

            placeholder="Correo Electrónico"
            className={`${css.input} ${css.colorplace} ${LexendD.className}`}
          />
        </div>
        <div className={`${css.tag}`}>
        <textarea
        name="edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
          
          placeholder="¿En que puedo ayudarte?"
          className={`${css.textarea} ${css.colorplace} ${LexendD.className}`}
        ></textarea></div>
        <div className='w-full flex justify-center'>
        <button type="submit" className={`${css.button} ${LexendD.className}`}>Enviar</button></div>
      </form>

      
    </div>
    
  );
}