import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventsForm from '../../components/MyEvents/EventsForm/EventsForm';
import EventList from '../../components/MyEvents/EventsList/EventList';
import MyModal from '../../components/UI/MyModal/MyModal';
import MyButton from '../../components/UI/Button/MyButton';
import styles from './Events.module.sass';
import CONSTANTS from '../../constants';
import Badge from '../../components/MyEvents/Badge/Badge';

function Events () {
  const [events, setEvents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [modal, setModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeEventsCount, setActiveEventsCount] = useState(0);
  const eventsCount = events.length;
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  //function addEvent (values) {
  //if (editingIndex !== null) {
  //const updatedEvents = [...events];
  //updatedEvents[editingIndex] = values;
  //setEvents(updatedEvents);
  // setEditingIndex(null);
  //} else {
  //  setEvents([...events, values]);
  //}
  //}
  const addEvent = newEvent => {
    setEvents([...events, newEvent]);
    setModal(false);
  };
  function deleteEvent (index) {
    setEvents(events.filter((_, i) => i !== index));
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

      <MyModal visible={modal} setVisible={setModal}>
        <EventsForm onSubmit={addEvent} />
      </MyModal>
      <div className={styles.eventsContainer}>
        <div className={styles.eventListNav}>
          <MyButton onClick={() => setModal(true)}>Create event</MyButton>
          <nav>
            <a href='/events'>
              <h3>
                Events
                <Badge count={eventsCount} />
              </h3>
            </a>
          </nav>
        </div>
        <div className={styles.eventsHeader}>
          <h3>The event has started!</h3>
          <span style={{ color: 'red' }}>{activeEventsCount}</span>;
          <span>Remaining time</span>
          <img
            className={styles.clocImage}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}header/romannumeralclock-1922.svg`}
            alt=''
          />
        </div>
        <hr />

        <div className={styles.eventListEvent}>
          {events.length === 0 ? (
            <div className={styles.notList}>
              <span>You have no any events yet</span>
            </div>
          ) : (
            //events.map(event => <EventList key={uuidv4()} {...event} />)

            events.map((event, index) => (
              <EventList
                key={index}
                {...event}
                onDelete={() => deleteEvent(index)}
                onEdit={setModal}
                setActiveEventsCount={setActiveEventsCount}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
