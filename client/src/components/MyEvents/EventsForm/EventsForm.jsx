import React, { useState } from 'react';
import { Formik } from 'formik';
import styles from './EventForm.module.sass';

const EventForm = ({ onSubmit, formData }) => {
  const [events, setEvents, remove] = useState([]);

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: '',
  };
  return (
    <Formik initialValues={initialValues}>
      {({ errors, touched, getFieldProps, handleSubmit }) => (
        <form className={styles.eventForm} onSubmit={handleSubmit}>
          <label className={styles.eventInput}>
            <span>Event name</span>

            <input
              type='text'
              name='eventName'
              autoComplete='off'
              {...getFieldProps('eventName')}
            />
            {touched.eventName && errors.eventName ? (
              <div className={styles.errorMessage}>{errors.eventName}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Event date</span>

            <input
              type='date'
              name='eventDate'
              autoComplete='off'
              {...getFieldProps('eventDate')}
            />
            {touched.eventDate && errors.eventDate ? (
              <div className={styles.errorMessage}>{errors.eventDate}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Event time</span>

            <input
              type='time'
              name='eventTime'
              autoComplete='off'
              {...getFieldProps('eventTime')}
            />
            {touched.eventTime && errors.eventTime ? (
              <div className={styles.errorMessage}>{errors.eventTime}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Remind me in</span>

            <input
              type='time'
              name='remindTime'
              autoComplete='off'
              {...getFieldProps('remindTime')}
            />
            {touched.remindTime && errors.remindTime ? (
              <div className={styles.errorMessage}>{errors.remindTime}</div>
            ) : null}
          </label>

          <button className={styles.eventBtn} type='submit'>
            Add
          </button>
        </form>
      )}
    </Formik>
  );
};

export default EventForm;
