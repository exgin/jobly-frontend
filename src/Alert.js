import React from 'react';

const Alert = ({ messages = [] }) => {
  return (
    <div>
      {messages.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
};

export default Alert;
