import React, { useState, useEffect, useMemo } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressItem (props) {
  const { progressState, period } = props;

  const initProgBarValue = useMemo(
    () => calcPeriod(progressState, period),
    [progressState]
  );
  function calcPeriod (progressState, period) {
    const now = new Date();
    const timeDiff = progressState - now;
    const periodDiff = period - now;
    return (timeDiff / periodDiff) * 100;
  }
  const [progressBarValue, setProgressBarValue] = useState(initProgBarValue);

  useEffect(() => {
    let progressValueId = setTimeout(function runProgressValue () {
      setProgressBarValue(calcPeriod(progressState, period));

      progressValueId = setTimeout(runProgressValue, 1000);
    }, 1000);

    return () => {
      clearTimeout(progressValueId);
    };
  }, [progressState]);

  return <ProgressBar animated variant='primary' now={progressBarValue} />;
}

export default ProgressItem;
