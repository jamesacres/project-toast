import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const onDismiss = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const showToast = ({ variant, children }) => {
    setToasts([
      ...toasts,
      {
        variant,
        children,
        onDismiss,
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
