import React from 'react';

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
