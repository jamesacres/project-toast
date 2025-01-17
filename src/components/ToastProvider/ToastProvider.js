import React from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]));

  const onDismiss = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  const showToast = React.useCallback(
    ({ variant, children }) => {
      setToasts([
        ...toasts,
        {
          variant,
          children,
          onDismiss,
          id: crypto.randomUUID(),
        },
      ]);
    },
    [toasts, onDismiss]
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
