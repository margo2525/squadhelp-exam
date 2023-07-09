import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import styles from './EventsItem.module.sass';
import Timer from '../TimeColor/Timer';

import CountdownTimer from '../ProgressBar/CountdownTime';

const EventsItem = props => {
  //console.log('EventsItem targetDateTime:', props.targetDateTime); // log the targetDateTime prop
  const timeLeft = calculateTimeLeft(props.targetDateTime);
  const targetDateTime = props.targetDateTime;

  return (
    <div className={styles.eventListEvent}>
      <CountdownTimer targetDateTime={targetDateTime} />

      <div className={styles.eventBtn}>
        <div className={styles.timerView}>
          <Timer targetDateTime={props.targetDateTime} />
        </div>
        <button onClick={() => props.remove(props.index)}>
          <FaTrashAlt />
        </button>
        <button
          onClick={() =>
            props.edit(props.index, {
              ...props.event,
            })
          }
        >
          <FaPencilAlt />
        </button>
      </div>
    </div>
  );
};

function calculateTimeLeft (targetDateTime) {
  const difference = +new Date(targetDateTime) - +new Date();
  return difference;
}

export default EventsItem;
