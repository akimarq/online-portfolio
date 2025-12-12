import React, { useRef, useEffect } from 'react';
import './Video.css';

export default function Video({ src, poster, title, onClose, openerRef }) {
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      openerRef?.current?.focus();
    };
  }, [onClose, openerRef]);

  const backdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  return (
    <div
      className="vlb-backdrop"
      ref={modalRef}
      onMouseDown={backdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="vlb-panel">
        <button
          className="vlb-close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Close video"
        >
          ✕
        </button>
        <div className="vlb-video-container">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
