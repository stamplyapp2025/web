import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/promoCard.module.css";
import { theme } from "../theme";
import phone1 from "../assets/mockup-left.png";
import phone2 from "../assets/mockup-left-1.png";
import phone3 from "../assets/mockup-left.png";

export default function PromoCard() {
  const images = [phone1, phone2, phone3];
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);
  const autoSlide = useRef(null);

  // auto-slide every 3 seconds
  useEffect(() => {
    autoSlide.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(autoSlide.current);
  }, []);

  // handle swipe gesture
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swipe left
        setCurrent((prev) => (prev + 1) % images.length);
      } else {
        // swipe right
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setStartX(null);
  };

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.border,
      }}
    >
      {/* Left Side */}
      <div className={styles.textArea}>
        <h4 className={styles.brand}>STAMPY</h4>
        <h1 className={styles.title} style={{ color: theme.colors.primary }}>
          DIGITAL<br />LOYALTY
        </h1>
        <p className={styles.link}>www.stamply.nu</p>
      </div>

      {/* Right Side (swipeable image) */}
      <div
        className={styles.imageArea}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.slide}>
              <img src={img} alt={`mockup-${index}`} className={styles.image} />
            </div>
          ))}
        </div>

        {/* Small dot indicators */}
        <div className={styles.dots}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
