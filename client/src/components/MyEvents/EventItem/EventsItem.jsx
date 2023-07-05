import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import styles from './EventsItem.module.sass';
import Timer from '../TimeColor/Timer';
import ProgressBar from '../ProgressBar/ProgressBar';

const EventsItem = props => {
  //console.log('EventsItem targetDateTime:', props.targetDateTime); // log the targetDateTime prop
  const timeLeft = calculateTimeLeft(props.targetDateTime);

  return (
    <div className={styles.eventListEvent}>
      <ProgressBar eventName={props.event.eventName} timeLeft={timeLeft} />

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
