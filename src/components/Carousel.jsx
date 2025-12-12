// src/components/AboutCarouselSimple.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

export default function AboutCarouselSimple({
  images = [],
  altTexts = [],
  autoplay = true,
  interval = 3500,   // autoplay every 3.5 seconds
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  const goTo = (i) => setIndex(((i % images.length) + images.length) % images.length);

  // autoplay
  useEffect(() => {
    if (!autoplay || paused || images.length <= 1) return;
    const timer = setInterval(() => next(), interval);
    return () => clearInterval(timer);
  }, [autoplay, paused, images.length, interval]);

  // touch swipe
  const onTouchStart = (e) => { startX.current = e.touches?.[0]?.clientX ?? null; };
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (endX == null) return;
    const dx = endX - startX.current;
    const threshold = 30;
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    startX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <div
      className="acs"
      role="region"
      aria-roledescription="carousel"
      aria-label="About images"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="acs-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            className="acs-slide"
            key={i}
            aria-hidden={i === index ? 'false' : 'true'}
            tabIndex={i === index ? 0 : -1}
          >
            <img src={src} alt={altTexts[i] ?? `image ${i + 1}`} draggable="false" />
          </div>
        ))}
      </div>

      <button className="acs-btn acs-prev" onClick={prev} aria-label="Previous">‹</button>
      <button className="acs-btn acs-next" onClick={next} aria-label="Next">›</button>

      <div className="acs-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`acs-dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-pressed={i === index}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
