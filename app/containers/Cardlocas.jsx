'use client'
import React, { useState, useEffect } from 'react';
import styles from '../statics/styles/Cardloca.module.css';



const CardContainer = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(cards) || cards.length < 2) {
    return <div>No hay suficientes tarjetas para mostrar.</div>;
  }

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  return (
    <div className={styles.container}>
      <button onClick={prevCards} className={styles.arrow}>
        &lt;
      </button>
      
      <div className={styles.cardContainer}>
        <div 
          className={styles.cardWrapper}
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <button onClick={nextCards} className={styles.arrow}>
        &gt;
      </button>
    </div>
  );
};

export default CardContainer;