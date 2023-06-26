import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './EventsForm.module.sass';

function EventsForm ({ onSubmit }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        eventName: '',
        eventDate: '',
        eventTime: '',
        notificationTime: '',
        notificationText: '',
      }}
    >
      <Form className={styles.eventForm}>
        <label className={styles.eventInput}>
          Event Name:
          <Field name='eventName' />
        </label>
        <br />
        <label className={styles.eventInput}>
          Event Date:
          <Field name='eventDate' type='date' />
        </label>
        <br />
        <label className={styles.eventInput}>
          Event Time:
          <Field name='eventTime' type='time' />
        </label>
        <br />
        <label className={styles.eventInput}>
          Notify me:
          <Field name='notificationTime' type='date' />
        </label>
        <br />
        <label className={styles.eventInput}>
          Notification Text:
          <Field name='notificationText' type='text' />
        </label>
        <br />
        <button className={styles.eventBtn} type='submit'>
          Add Event
        </button>
      </Form>
    </Formik>
  );
}

export default EventsForm;
