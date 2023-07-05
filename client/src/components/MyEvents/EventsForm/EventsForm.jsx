import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyButton from '../../UI/Button/MyButton';
import styles from './EventsForm.module.sass';

const EventsForm = ({ create, isEditing }) => {
  const initialValues = { eventName: '', eventDate: '', eventTime: '' };

  const validate = values => {
    const errors = {};
    if (!values.eventName) {
      errors.eventName = "Обов'язкове поле";
    }
    if (!values.eventDate) {
      errors.eventDate = "Обов'язкове поле";
    }
    if (!values.eventTime) {
      errors.eventTime = "Обов'язкове поле";
    }
    return errors;
  };

  const addNewEvent = (event, { resetForm }) => {
    const targetDateTime = new Date(`${event.eventDate}T${event.eventTime}`);

    console.log('targetDateTime:', targetDateTime);
    const newEvent = { ...event, id: Date.now(), targetDateTime };
    create(newEvent);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={addNewEvent}
    >
      <Form className={styles.eventForm}>
        <div className={styles.eventInput}>
          <label htmlFor='eventName'>Назва події</label>
          <Field type='text' id='eventName' name='eventName' />
          <ErrorMessage className={styles.errorMessage} name='eventName' />
        </div>

        <div className={styles.eventInput}>
          <label htmlFor='eventDate'>Дата</label>
          <Field type='Date' id='eventDate' name='eventDate' />
          <ErrorMessage name='eventDate' />
        </div>

        <div className={styles.eventInput}>
          <label htmlFor='eventTime'>Час</label>
          <Field type='Time' id='eventTime' name='eventTime' />
          <ErrorMessage name='eventTime' />
        </div>

        <MyButton type='submit'>
          {isEditing ? 'Add event' : 'Save changes'}
        </MyButton>
      </Form>
    </Formik>
  );
};

export default EventsForm;
