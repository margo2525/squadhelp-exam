import React from 'react';
import styles from 'MyInput.module.sass';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={styles.myInput} {...props} />;
});

export default MyInput;
