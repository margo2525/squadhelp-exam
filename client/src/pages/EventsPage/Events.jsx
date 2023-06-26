import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventsForm from '../../components/MyEvents/EventsForm/EventsForm';
import EventList from '../../components/MyEvents/EventsList/EventList';
import EditEventModal from '../../components/MyEvents/modal/EditEventModal';
import styles from './Events.module.sass';
import CONSTANTS from '../../constants';
function Events () {
  // остальной код компонента
  const [events, setEvents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeEventsCount, setActiveEventsCount] = useState(0);
  function openModal (event) {
    setIsModalOpen(true);
    setSelectedEvent(event);
  }
  function closeModal () {
    setIsModalOpen(false);
    setSelectedEvent(null);
  }

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  function addEvent (values) {
    if (editingIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editingIndex] = values;
      setEvents(updatedEvents);
      setEditingIndex(null);
    } else {
      setEvents([...events, values]);
    }
  }

  function deleteEvent (index) {
    setEvents(events.filter((_, i) => i !== index));
  }

  function editEvent (index) {
    const event = events[index];
    setEditingIndex(index);
  }
  function updateEvent (updatedEvent) {
    if (editingIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editingIndex] = updatedEvent;
      setEvents(updatedEvents);
      setEditingIndex(null);
    }
  }

  return (
    <>
      <Header />
      <div>
        <h1 className={styles.title}>Your Events</h1>
      </div>
      <div className={styles.eventsContainer}>
        <EventsForm onSubmit={addEvent} />
        <div className={styles.eventListContainer}>
          <div className={styles.eventsHeader}>
            <h3>Your Events</h3>
            <span style={{ color: 'red' }}>{activeEventsCount}</span>;
            <span>Remaining time</span>
            <img
              className={styles.clocImage}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}header/romannumeralclock-1922.svg`}
              alt=''
            />
          </div>
          <hr />
          <ul>
            {events.map((event, index) => (
              <EventList
                key={index}
                {...event}
                onDelete={() => deleteEvent(index)}
                onEdit={openModal}
                setActiveEventsCount={setActiveEventsCount}
              />
            ))}
          </ul>
        </div>

        <EditEventModal
          show={isModalOpen}
          onHide={closeModal}
          event={selectedEvent}
          onSave={updateEvent}
        />
      </div>
      <Footer />
    </>
  );
}

export default Events;
