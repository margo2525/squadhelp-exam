import React from 'react';
import './EventsList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './EventsList.module.sass';
import EventsItem from '../EventItem/EventsItem';
const EventList = ({
  events,

  remove,
  edit,
}) => {
  //console.log('EventList events:', events);
  return (
    <div>
      <div className={styles.eventListEvent}>
        {events.length === 0 ? (
          <div className={styles.notList}>
            <span>You have no any events yet</span>
          </div>
        ) : (
          //events.map(event => <EventList key={uuidv4()} {...event} />)
          <TransitionGroup>
            {events.map((event, index) => (
              <CSSTransition key={event.id} timeout={500} classNames='event'>
                <EventsItem
                  remove={remove}
                  edit={edit}
                  index={index}
                  event={event}
                  targetDateTime={event.targetDateTime}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default EventList;
