import React, { useState, useEffect, useRef } from 'react';
import styles from './Timer.module.css';

const FULL_DASH_ARRAY = 1;
const WARNING_THRESHOLD = 0.6;
const ALERT_THRESHOLD = 0.3;

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 0;

function Timer () {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timePassed, setTimePassed] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [remainingPathColor, setRemainingPathColor] = useState(
    COLOR_CODES.info.color
  );

  const timerPathRef = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, [timeLeft]);

  function onTimesUp () {
    clearInterval(timerInterval);
    alert('Время вышло!');
  }

  function startTimer () {
    setTimerInterval(
      setInterval(() => {
        setTimePassed(timePassed => timePassed + 1);
        setTimeLeft(TIME_LIMIT - timePassed);
        setCircleDasharray();
        setRemainingPathColor(getRemainingPathColor(timeLeft));
      }, 1000)
    );
  }

  function formatTime (time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function setCircleDasharray () {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 1`;
    timerPathRef.current.setAttribute('stroke-dasharray', circleDasharray);
  }

  function calculateTimeFraction () {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function getRemainingPathColor (timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      return alert.color;
    } else if (timeLeft <= warning.threshold) {
      return warning.color;
    } else {
      return info.color;
    }
  }

  return (
    <div className={styles.timer}>
      <svg
        className={styles.timerSvg}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g className={styles.timerCircle}>
          <rect x='30' y='50' width='12' height='5' />
          <path
            ref={timerPathRef}
            id='timerPathRemaining'
            strokeDasharray='283'
            className={styles.timerPathRemaining}
            style={{ stroke: remainingPathColor }}
            d="
              M 5,50
              A 45,45
              0
              ${calculateTimeFraction() < FULL_DASH_ARRAY ? '1' : '0'} 
              ${calculateTimeFraction() * FULL_DASH_ARRAY},50
            "
          ></path>
        </g>
      </svg>
      <div className={styles.timerValue}>{formatTime(timeLeft)}</div>
    </div>
  );
}

export default Timer;
