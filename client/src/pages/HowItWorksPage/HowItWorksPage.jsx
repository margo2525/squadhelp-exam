import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import HowItWorksHeader from './HowItWorksHeader/HowItWorksHeader';
import HowItWorksContests from './HowItWorksContests/HowItWorksContests';
import HowItWorksFAQ from './HowItWorksFAQ/HowItWorksFAQ';
import HowItWorksStart from './HowItWorksStart/HowItWorksStart';
import HowItWorksRatings from './HowItWorksRatings/HowItWorksRatings';
import HowItWorksContacts from './HowItWorksContacts/HowItWorksContacts';
import HowItWorksBrend from './HowItWorksBrend/HowItWorksBrend';

function HowItWorksPage (props) {
  const { isFetching } = props;

  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <HowItWorksHeader />
          <HowItWorksContests />
          <HowItWorksFAQ />
          <HowItWorksStart />
          <HowItWorksRatings />
          <HowItWorksContacts />
          <HowItWorksBrend />
          <Footer />
        </>
      )}
    </>
  );
}

export default HowItWorksPage;
