import React from 'react';
import styles from './HowItWorksContests.module.sass';
import CONSTANTS from '../../../constants';
function HowItWorksContests () {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <img
          className={styles.trophyIcon}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}header/trophy.png`}
          alt=''
        />
        <h2>How Do Naming Contests Work?</h2>
      </div>

      <img
        className={styles.workingImage}
        src={`${CONSTANTS.STATIC_IMAGES_PATH}header/how-contests-work.png`}
        alt=''
      />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.number}>1.</span>
          <p>
            Fill out your Naming Brief and begin receiving name ideas in minutes
          </p>
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>2.</span>
          <p>
            Rate the submissions and provide feedback to creatives. Creatives
            submit even more names based on your feedback.
          </p>
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>3.</span>
          <p>
            Our team helps you test your favorite names with your target
            audience. We also assist with Trademark screening.
          </p>
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>4.</span>
          <p>Pick a Winner. The winner gets paid for their submission.</p>
        </li>
      </ul>
    </section>
  );
}

export default HowItWorksContests;
