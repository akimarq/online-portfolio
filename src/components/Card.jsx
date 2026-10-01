import React, { useState, useRef } from 'react';
import VideoLightbox from './Video.jsx';
import './Video.css'; // your css

function Card({ title, description, env, role, media, poster }) {
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
              src={media}
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
              <img src={poster} alt={`${title} preview`} className="card-poster" />
              <span className="card-play-icon">▶</span>
            </button>
          )}
        </div>

        <div className="card-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{env}</p>
          <p>{role}</p>
        </div>
      </div>

      {/* Desktop modal */}
      {showModal && (
        <VideoLightbox
          src={media}
          poster={poster}
          title={title}
          onClose={onCloseModal}
          openerRef={openerRef}
        />
      )}
    </>
  );
}

export default Card;
