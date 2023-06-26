import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field } from 'formik';

function EditEventModal ({ show, onHide, event, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {event && (
          <Formik
            initialValues={event}
            onSubmit={values => {
              onSave(values);
              onHide();
            }}
          >
            <Form>
              <label>
                Event Name:
                <Field name='name' />
              </label>
              <br />
              <label>
                Event Date:
                <Field name='date' type='date' />
              </label>
              <br />
              <label>
                Event Time:
                <Field name='time' type='time' />
              </label>
              <br />
              <label>
                Notify me:
                <Field name='notification' type='number' /> minutes before
              </label>
              <br />
              <label>
                Notification Text:
                <Field name='notificationText' type='text' />
              </label>
              <br />
              <button type='submit'>Save</button>
            </Form>
          </Formik>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default EditEventModal;
