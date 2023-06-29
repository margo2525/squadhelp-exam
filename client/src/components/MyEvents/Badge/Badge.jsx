import React from 'react';

const Badge = ({ count }) => {
  return (
    <span
      style={{
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '5px 15px',
        marginLeft: '10px',
      }}
    >
      {count}
    </span>
  );
};

export default Badge;
