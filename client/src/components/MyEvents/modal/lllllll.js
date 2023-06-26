import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
const [editingEventId, setEditingEventId] = useState(null);
const dispatch = useDispatch();

const handleUpdateEvent = (eventId, newValues) => {
  dispatch(updateEvent(eventId, newValues));
  setEditingEventId(null);
};
<Modal isOpen={!!editingEventId}>
  {editingEventId && (
    <>
      <h2>Edit Event</h2>
      <EventsForm
        initialValues={events.find(event => event.id === editingEventId)}
        onSubmit={newValues => handleUpdateEvent(editingEventId, newValues)}
      />
      <button onClick={() => setEditingEventId(null)}>Cancel</button>
    </>
  )}
</Modal>;
import React from 'react';
<nav>
  {/* Інші посилання */}
  <a href='/events'>
    Events <Badge count={eventsCount} />
  </a>
</nav>;
const Badge = ({ count }) => {
  return (
    <span
      style={{
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '5px 10px',
      }}
    >
      {count}
    </span>
  );
};

export default Badge;
