import React from 'react';
import styles from './HowItWorksFAQ.module.sass';
import categories from './FAQItem/FAQ.json';
import FAQItem from './FAQItem/FAQItem';

function HowItWorksFAQ () {
  const mapFAQ = (category, i) => (
    <div id={category.shortCategoryTitle} key={i}>
      <h3 className={styles.categoryTitle}>{category.categoryTitle}</h3>
      <div>
        {category.faqs.map(faq => (
          <FAQItem faq={faq} />
        ))}
      </div>
    </div>
  );
  return (
    <div className={styles.FAQSection}>
      <ul className={styles.FAQCategories}>
        {categories.map((category, i) => (
          <li key={i}>
            <a href={`#${category.shortCategoryTitle}`}>
              {category.categoryTitle}{' '}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.FAQContent}> {categories.map(mapFAQ)} </div>
    </div>
  );
}

export default HowItWorksFAQ;
