import React, { useState, useEffect, useMemo } from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import styles from './EventsList.module.sass';
import ProgressItem from '../ProgressItem/ProgressItem';

function EventList ({
  eventName,
  eventDate,
  eventTime,
  notification,
  notificationText,
  onDelete,
  onEdit,
  setActiveEventsCount,
}) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (timeLeft === 'The event has started!') {
      setActiveEventsCount(count => count + 1);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const initialProgressData = new Date();
  const [progressState, setProgressState] = useState(initialProgressData);
  const userDate = new Date(eventDate);
  const createdEventDate = new Date();
  const period = useMemo(() => userDate - createdEventDate, []);

  useEffect(() => {
    let progressId = setTimeout(function runProgress () {
      setProgressState(progressState + 1000);

      progressId = setTimeout(runProgress, 1000);
    }, 1000);

    return () => {
      clearTimeout(progressId);
    };
  }, [progressState]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDateTime = new Date(`${eventDate}T${eventTime}`);
      const timeDiff = eventDateTime - now;
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor(timeDiff / 1000 / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (timeDiff > 0) {
        setTimeLeft(
          `${days} days ${hours % 24} hours ${
            minutes % 60
          } minutes ${seconds} seconds left`
        );
        if (
          notification &&
          timeDiff < notification * 60 * 1000 &&
          Notification.permission === 'granted'
        ) {
          new Notification(
            notificationText || `Event ${eventName} is starting soon!`
          );
        }
      } else {
        setTimeLeft('The event has started!');
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate, eventTime, eventName, notification, notificationText]);
  return (
    <div>
      <li className={styles.eventList}>
        <ProgressItem progressState={progressState} period={period} />
        {eventName} {eventDate} {eventTime} {timeLeft}
        <div className={styles.eventBtn}>
          <button onClick={onEdit}>
            <FaPencilAlt />
          </button>
          <button onClick={onDelete}>
            <FaTrashAlt />
          </button>
        </div>
      </li>
    </div>
  );
}

export default EventList;
