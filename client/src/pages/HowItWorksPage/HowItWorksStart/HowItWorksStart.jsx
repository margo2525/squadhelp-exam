import React from 'react';
import styles from './HowItWorksStart.module.sass';

function HowItWorksStart () {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startBanner}>
        <h2 className={styles.startBannerHeader}>Ready to get started?</h2>
        <p className={styles.startBannerText}>
          Fill out your contest brief and begin receiving custom name
          suggestions within minutes.
        </p>
        <button className={styles.startBannerBtn}>
          <a className={styles.startBannerBtnText} href='/'>
            Start A Contest
          </a>
        </button>
      </div>
    </div>
  );
}

export default HowItWorksStart;
