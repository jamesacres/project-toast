import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        callback();
      }
    });
  }, [callback]);
};
