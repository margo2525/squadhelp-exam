import React from 'react';
import styles from './ButtonGroup.module.sass';

function ButtonItem (props) {
  const {
    id,
    infoData: { header, main, isHighlighted },
    highlightElement,
  } = props;

  return (
    <li
      key={id}
      className={isHighlighted ? styles.highlightElement : styles.buttonItem}
      onClick={e => highlightElement(id)}
    >
      <h3>{header}</h3>
      <p>{main}</p>
    </li>
  );
}

export default ButtonItem;
