import React, { useState, useRef } from 'react';
import VideoLightbox from './Video.jsx';
import './Video.css'; // your css

function Card({ name, desc, env, videoSrc, poster }) {
  const openerRef = useRef(null);
  const [showInline, setShowInline] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // detect mobile/touch
  const isMobile = typeof window !== 'undefined'
    ? window.matchMedia('(pointer:coarse), (max-width: 768px)').matches
    : false;

  const onPlay = () => {
    if (isMobile) {
      // inline play
      setShowInline(true);
    } else {
      // open modal
      setShowModal(true);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    openerRef.current?.focus();
  };

  return (
    <>
      <div className="project-card">
        <div className="card-visual">
          {showInline ? (
            <video
              className="card-video-inline"
              src={videoSrc}
              poster={poster}
              controls
              autoPlay
            />
          ) : (
            <button
              ref={openerRef}
              className="card-video-button"
              onClick={onPlay}
            >
              <img src={poster} alt={`${name} preview`} className="card-poster" />
              <span className="card-play-icon">▶</span>
            </button>
          )}
        </div>

        <div className="card-info">
          <h2>{name}</h2>
          <p>{desc}</p>
          <p>{env}</p>
        </div>
      </div>

      {/* Desktop modal */}
      {showModal && (
        <VideoLightbox
          src={videoSrc}
          poster={poster}
          title={name}
          onClose={onCloseModal}
          openerRef={openerRef}
        />
      )}
    </>
  );
}

export default Card;
