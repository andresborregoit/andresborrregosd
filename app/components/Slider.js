import styles from '../statics/styles/Slider.module.css';
import { Michroma } from "next/font/google";



const words = ['UX/UI', 'HTML', 'CSS', 'JAVASCRIPT','REACT', 'NEXT', 'FIREBASE', 'FIGMA' ];
const microma = Michroma({ subsets: ["latin"], weight: "400" });




const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.sliderContent}>
          {words.concat(words).map((word, index) => (
            <div key={index} className={` ${microma.className} ${styles.word} `}>
              <p className={` ${microma.className} ${styles.textoskill} `}>{word}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
