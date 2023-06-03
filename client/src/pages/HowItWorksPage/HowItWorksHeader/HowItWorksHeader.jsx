import React from 'react';
import styles from './HowItWorksHeader.module.sass';
import CONSTANTS from '../../../constants';

function HowItWorksHeader () {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.textHeader}>
          <div className={styles.world}>World's #1 Naming Platform</div>
          <h1>How Does Squadhelp Work?</h1>
          <p>
            Squadhelp helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
          <a className={styles.playBtn} href='/'>
            <i className='fas fa-play'></i>Play video
          </a>
        </div>
        <img
          className={styles.phoneImage}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}header/description-image.png`}
          alt=''
        />
      </section>
      <section>
        <div className={styles.worldContainer}>
          <div className={styles.world}>Our Services</div>
          <h2>3 Ways To Use Squadhelp</h2>
          <p>
            Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img
              className={styles.cardIcon}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}header/peopleIcon.svg`}
              alt=''
            />
            <h3>Launch a Contest</h3>
            <p>
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </p>
            <a className={styles.cardBtn} href='/'>
              Launch a Contest
            </a>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardIcon}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}header/monitorIcon.svg`}
              alt=''
            />
            <h3>Explore Names For Sale</h3>
            <p>
              Our branding team has curated thousands of pre-made names that you
              can purchase instantly. All names include a matching URL and a
              complimentary Logo Design
            </p>
            <a className={styles.cardBtn} href='/'>
              Explore Names For Sale
            </a>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardIcon}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}header/descriptionIcon.svg`}
              alt=''
            />
            <h3>Agency-level Managed Contests</h3>
            <p>
              Our Managed contests combine the power of crowdsourcing with the
              rich experience of our branding consultants. Get a complete
              agency-level experience at a fraction of Agency costs
            </p>
            <a className={styles.cardBtn} href='/'>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorksHeader;
