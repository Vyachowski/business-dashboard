import React, { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  // State storage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get localStorage by key
      const item = window.localStorage.getItem(key);
      // Read JSON or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Return initialValue if error
      console.error(error);
      return initialValue;
    }
  });

  // useEffect for localStorage update while value changed
  useEffect(() => {
    try {
      // Refresh localStorage based on storedValue
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Error catch
      console.error(error);
    }
  }, [key, storedValue]); // Run useEffect

  // return a value and a function to set the value
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
