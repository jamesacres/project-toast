import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const onEvent = (e) => {
      if (e.code === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', onEvent);
    return () => window.removeEventListener('keydown', onEvent);
  }, [callback]);
};
