import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import styles from './EventsList.module.sass';

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

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDateTime = new Date(`${eventDate}T${eventTime}`);
      const timeDiff = eventDateTime - now;
      const minutes = Math.floor(timeDiff / 1000 / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (timeDiff > 0) {
        setTimeLeft(`${days}:${hours % 24}:${minutes % 60} left`);
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
        {eventName} on {eventDate} at {eventTime} ({timeLeft})
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
