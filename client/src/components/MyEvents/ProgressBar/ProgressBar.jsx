import React, { useState, useEffect } from 'react';

function ProgressBar ({ eventName, timeLeft }) {
  const [progress, setProgress] = useState(300);
  const hasTimeRunOut = timeLeft <= 0;
  const animationDuration = hasTimeRunOut ? 0 : timeLeft / 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: '50px',
          backgroundColor: hasTimeRunOut ? 'red' : '#7fe7c8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: `width ${animationDuration}s linear`,
        }}
      >
        {hasTimeRunOut ? 'Ваша подія почалась' : eventName}
      </div>
    </div>
  );
}

export default ProgressBar;
