// src/components/AnimatedText.js
import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  const professions = ['Engineering', 'Health', 'Media', 'Technology', 'Education'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <h2 className="text-2xl font-semibold text-blue-600 transition-opacity duration-500 ease-in-out">
      Learn from the Experts in <span className="font-bold">{professions[index]}</span>
    </h2>
  );
};

export default AnimatedText;
