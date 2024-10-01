import React, { useState, useEffect } from 'react';
import 'Transition.css';

const Transition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay for better transition effect
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Text Box 1"
        className={`textbox from-right ${isVisible ? 'visible' : ''}`}
      />
      <input
        type="text"
        placeholder="Text Box 2"
        className={`textbox from-left ${isVisible ? 'visible' : ''}`}
      />
      <input
        type="text"
        placeholder="Text Box 3"
        className={`textbox from-right ${isVisible ? 'visible' : ''}`}
      />
    </div>
  );
};

export default Transition;
