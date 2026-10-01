import React, { useState, useEffect, useRef, Children } from 'react';
import './Carousel.css';

export default function Carousel({
  children,
  index: indexProp,
  onIndexChange,
  autoplay = false,
  interval = 3500,
  ariaLabel = 'Carousel',
  className = '',
  showArrows = true,
  showDots = true,
}) {
  const slides = Children.toArray(children).filter(Boolean);
  const count = slides.length;

  const isControlled = indexProp !== undefined;
  const [internalIndex, setInternalIndex] = useState(0);
  const index = isControlled ? indexProp : internalIndex;

  const startX = useRef(null);
  const [paused, setPaused] = useState(false);

  const setIndex = (next) => {
    if (count === 0) return;
    const resolved = typeof next === 'function' ? next(index) : next;
    const wrapped = ((resolved % count) + count) % count;
    if (!isControlled) setInternalIndex(wrapped);
    onIndexChange?.(wrapped);
  };

  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (!autoplay || paused || count <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, paused, count, interval, index]);

  const onTouchStart = (e) => {
    startX.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (endX == null) return;
    const dx = endX - startX.current;
    if (dx > 30) prev();
    else if (dx < -30) next();
    startX.current = null;
  };

  if (count === 0) return null;

  return (
    <div
      className={`carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            className="carousel-slide"
            key={slide.key ?? i}
            aria-hidden={i !== index}
          >
            {slide}
          </div>
        ))}
      </div>

      {showArrows && count > 1 && (
        <>
          <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="carousel-btn carousel-next" onClick={next} aria-label="Next">
            ›
          </button>
        </>
      )}

      {showDots && count > 1 && (
        <div className="carousel-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.key ?? i}
              className={`carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-pressed={i === index}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}