import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ children, id, ...props }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} {...props}>
              {children}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
