import React from 'react';
import styles from './HowItWorksContacts.module.sass';

function HowItWorksContacts () {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsList}>
        <div className={styles.contactsImet}>
          <div className={styles.arrow}>
            <i class='fas fa-angle-right btn-icon__inner'></i>
          </div>
          <h4 className={styles.contactsHeader}>
            Pay a Fraction of cost vs hiring an agency
          </h4>
          <p className={styles.contactsTitle}>
            For as low as $199, our naming contests and marketplace allow you to
            get an amazing brand quickly and affordably.
          </p>
        </div>
        <div className={styles.contactsImet}>
          <div className={styles.arrow}>
            <i class='fas fa-angle-right btn-icon__inner'></i>
          </div>
          <h4 className={styles.contactsHeader}>Satisfaction Guarantee</h4>
          <p className={styles.contactsTitle}>
            Of course! We have policies in place to ensure that you are
            satisfied with your experience.
          </p>
          <a href='/'>Learn more</a>
        </div>
      </div>
      <div className={styles.questions}>
        <h4 className={styles.questionsHeader}>Questions?</h4>
        <p className={styles.questionsTitle}>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <button className={styles.btnQuetions}>
          <span className={styles.consultation}>Schedule Consultation</span>
        </button>

        <p className={styles.phoneNumber}> # (877) 355-3585</p>
        <p className={styles.phoneNumber}>Call us for assistance</p>
      </div>
    </div>
  );
}

export default HowItWorksContacts;
