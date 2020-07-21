import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue = null) => {
  // no need to use JSON.parse, since we're working with a JSON backend api
  const INT_STATE = localStorage.getItem(key) || defaultValue;
  const [state, setState] = useState(INT_STATE);

  useEffect(() => {
    // if/else used to help with the logout/ authorization
    if (!state) {
      localStorage.removeItem(state);
    } else {
      localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
