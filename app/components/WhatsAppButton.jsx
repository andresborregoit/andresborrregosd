'use client'

import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleClick = () => {
    const phoneNumber = '5492314570388' 
    const message = encodeURIComponent('¡Hola! Me interesan tus soluciones digitales y me gustaría saber cómo podrías ayudarme.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  )
}