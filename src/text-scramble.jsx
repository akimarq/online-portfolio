import React, { useRef, useEffect } from 'react';

// --- This is the original TextScramble class ---
class Scramble {
  constructor(el) {
    this.el = el;
    this.charSets = {
      matrix4: '九七二人入八力十下三千上口土夕大女子小山川五天中六円手文日月木水火犬王正出本右四左玉生田白目石立百年休先名字早気竹糸耳虫村男町花見貝赤足車学林空金雨青草音',
    };
    this.chars = this.charSets.matrix4;
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scrambling">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// --- This is the React Component wrapper ---
const TextScramble = ({ phrases, charSet = 'matrix4' }) => {
  const textElementRef = useRef(null);
  const fxRef = useRef(null);

  useEffect(() => {
    fxRef.current = new Scramble(textElementRef.current);
    fxRef.current.chars = fxRef.current.charSets[charSet];

    let counter = 0;
    let timeoutId;

    const nextPhrase = () => {
      fxRef.current.setText(phrases[counter]).then(() => {
        timeoutId = setTimeout(nextPhrase, 5000); // 3-second delay between phrases
      });
      counter = (counter + 1) % phrases.length;
    };

    nextPhrase(); // Start the loop

    // Cleanup function to prevent memory leaks
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(fxRef.current.frameRequest);
    };
  }, [phrases, charSet]);

  return <div ref={textElementRef} className="text-container" />;
};

export default TextScramble;