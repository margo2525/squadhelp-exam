import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Events.module.sass';
const Events = () => {
  return (
    <>
      <Header />
      <div className={styles.eventsContainer}>
        <h1 className={styles.title}>Your Events</h1>
      </div>

      <Footer />
    </>
  );
};

export default Events;
