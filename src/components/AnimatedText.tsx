import { useState, useEffect } from 'react';

const greetings = ["Hello, I'm ", 'Hola, soy ', 'Ciao, sono '];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkFast, setBlinkFast] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentGreeting = greetings[index];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentGreeting.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentGreeting) {
        setBlinkFast(true);
        setTimeout(() => {
          setBlinkFast(false);
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % greetings.length);
      }
    };

    const typingInterval = setInterval(type, 150);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, index]);

  return (
    <div className="animated-text">
      <div>
        {displayedText}
        <span className={blinkFast ? 'cursor-fast-blink' : 'cursor'}>|</span>
        <br />
        <span className="animated-text ">Julio Mijares</span>
      </div>
      <div>Frontend Developer</div>
    </div>
  );
};

export default AnimatedText;
