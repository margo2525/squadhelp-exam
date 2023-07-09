import React, { useState, useEffect, useRef } from 'react';
import styles from './ProgressBar.module.sass';

function CountdownTimer ({ targetDateTime }) {
  const totalTime = useRef(calculateTimeLeft(targetDateTime));

  const [remainingTime, setRemainingTime] = useState(totalTime.current);
  //console.log(`Target date and time: ${targetDateTime}`);
  //const totalTime = calculateTimeLeft(targetDateTime);
  // console.log(`Total time: ${totalTime.current}`);
  // console.log(`Total time: ${totalTime}`);

  //const [remainingTime, setRemainingTime] = useState(totalTime);
  //console.log(`Remaining time: ${remainingTime}`);
  const countdownEl = useRef(null);
  const progressBarEl = useRef(null);

  useEffect(() => {
    const countdown = () => {
      if (remainingTime > 0) {
        // update countdown timer
        // countdownEl.current.textContent = remainingTime;

        const progress =
          ((totalTime.current - remainingTime) / totalTime.current) * 100;
        progressBarEl.current.style.width = `${progress}%`;

        //console.log(`Progress: ${progress}%`); // log the progress to the console
        setRemainingTime(remainingTime - 1);
      } else {
        // countdown finished
        progressBarEl.current.style.width = '100%';
        progressBarEl.current.style.backgroundColor = 'red';
        countdownEl.current.textContent = "Time's up!";
      }
    };

    setTimeout(countdown, 1000);
  }, [remainingTime]);

  return (
    <div>
      <div className={styles.countdown} ref={countdownEl} />
      <div className={styles.progressbar}>
        <div className={styles.progress} ref={progressBarEl} />
      </div>
    </div>
  );
}

//function calculateTimeLeft (targetDateTime) {
//  const difference = +new Date(targetDateTime) - +new Date();
//  return Math.floor(difference / 1000);
//}
function calculateTimeLeft (targetDateTime) {
  const difference = +new Date(targetDateTime) - +new Date();
  const timeLeft = Math.floor(difference / 1000);
  //console.log(`Time left: ${timeLeft}`);
  return timeLeft;
}

export default CountdownTimer;
