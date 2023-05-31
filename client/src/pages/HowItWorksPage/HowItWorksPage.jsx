import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

function HowItWorksPage (props) {
  const { isFetching } = props;
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Footer />
        </>
      )}
    </>
  );
}

export default HowItWorksPage;
