import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventForm from '../../components/MyEvents/EventsForm/EventsForm';
import styles from './Events.module.sass';
const Events = () => {
  return (
    <>
      <Header />
      <h1 className={styles.title}>Your Events</h1>
      <div className={styles.eventsContainer}>
        <EventForm />
      </div>

      <Footer />
    </>
  );
};

export default Events;
