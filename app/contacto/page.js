'use client'
import React, { useState } from 'react';

export default function Contacto() {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email pone"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="pone u nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="pone tu edad"
        name="edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
