import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import HowItWorksHeader from './HowItWorksHeader/HowItWorksHeader';

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
          <Footer />
        </>
      )}
    </>
  );
}

export default HowItWorksPage;
