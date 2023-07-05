import React, { useState, useEffect } from 'react';
import './Timer.css';
const Timer = ({ targetDateTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime));

  //console.log('Timer days:', timeLeft.days); // log the days state variable
  //console.log('Timer hours:', timeLeft.hours); // log the hours state variable
  //console.log('Timer minutes:', timeLeft.minutes); // log the minutes state variable
  //console.log('Timer seconds:', timeLeft.seconds); // log the seconds state variable

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDateTime));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='show-counter'>
      <div className='countdown-link'>
        <DateTimeDisplay value={timeLeft.days} type={'Days'} />
        <p>:</p>
        <DateTimeDisplay value={timeLeft.hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={timeLeft.minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={timeLeft.seconds} type={'Sec'} />
      </div>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

function calculateTimeLeft (targetDateTime) {
  //console.log('calculateTimeLeft targetDateTime:', targetDateTime); // log the targetDateTime argument
  const difference = +new Date(targetDateTime) - +new Date();

  console.log('difference:', difference);
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  //console.log('calculateTimeLeft timeLeft:', timeLeft); // log the timeLeft object
  return timeLeft;
}

export default Timer;
