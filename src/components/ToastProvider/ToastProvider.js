import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        setToasts([]);
      }
    });
  }, []);

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
