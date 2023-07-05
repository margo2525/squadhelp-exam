import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventsForm from '../../components/MyEvents/EventsForm/EventsForm';
import MyModal from '../../components/UI/MyModal/MyModal';
import MyButton from '../../components/UI/Button/MyButton';
import styles from './Events.module.sass';
import CONSTANTS from '../../constants';
import Badge from '../../components/MyEvents/Badge/Badge';
import EventList from '../../components/MyEvents/EventsList/EventList';

function Events () {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [modal, setModal] = useState(false);
  const [activeEventsCount, setActiveEventsCount] = useState(0);
  const eventsCount = events.length;

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const createEvents = newEvent => {
    //console.log('newEvent:', newEvent);
    setEvents(prevEvents => {
      const updatedEvents = [...prevEvents, newEvent];
      //console.log('updatedEvents:', updatedEvents);
      return updatedEvents;
    });
    setModal(false);
  };
  function removeEvent (index) {
    //console.log('removeEvent function called with index:', index);
    setEvents(events.filter((_, i) => i !== index));
  }
  function updateEvent (updatedEvent) {
    setEvents(events =>
      events.map(event => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  }
  function editEvent (index, updatedEvent) {
    setEvents(events =>
      events.map((event, i) => (i === index ? updatedEvent : event))
    );
  }
  function openEditModal (index) {
    setEditingEvent(events[index]);
    setModal(true);
  }

  return (
    <>
      <Header />
      <div>
        <h1 className={styles.title}>Your Events</h1>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        {editingEvent ? (
          <EventsForm
            event={editingEvent}
            update={updateEvent}
            isEditing={true}
          />
        ) : (
          <EventsForm create={createEvents} isEditing={false} />
        )}
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
        <div className={styles.eventListEvent}>
          <EventList
            events={events}
            remove={removeEvent}
            edit={openEditModal}
            setActiveEventsCount={setActiveEventsCount}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
