import React from 'react';
import styles from './HowItWorksBrend.module.sass';
import CONSTANTS from '../../../constants';
function HowItWorksBrend () {
  return (
    <div className={styles.brendContainer}>
      <h3 className={styles.brendHeader}>Featured In</h3>
      <li className={styles.brend}>
        <img
          className={styles.brendIcon}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}header/forbes.svg`}
          alt=''
        />
      </li>
      <li className={styles.brend}>
        <img
          className={styles.brendIcon}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}header/TNW.svg`}
          alt=''
        />
      </li>
      <li className={styles.brend}>
        <img
          className={styles.brendIcon}
          src='https://www.squadhelp.com/resources/assets/imgs/front/chicago.svg'
          alt=''
        />
      </li>
      <li className={styles.brend}>
        <img
          className={styles.brendIcon}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}header/Mashable.svg`}
          alt=''
        />
      </li>
    </div>
  );
}

export default HowItWorksBrend;
