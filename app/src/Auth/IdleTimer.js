import React, { useState, useEffect, useRef } from 'react';

const IdleTimer = ({logoutHandler}) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef(null);

  const handleActivity = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
      logoutHandler();
    }, (30 * 60 * 1000)); // 30 minutes
  };

  useEffect(() => {
    // Add event listeners for various user interactions
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);
    document.addEventListener('touchstart', handleActivity);
    // ... add more events as needed

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      document.removeEventListener('touchstart', handleActivity);
      // ... remove other events
    };
  }, []);

}

export default IdleTimer;