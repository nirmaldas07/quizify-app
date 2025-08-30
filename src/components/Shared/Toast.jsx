//src/components/toast.jsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Toast({ message, onClose, duration = 1000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return createPortal(
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/80 text-white rounded-lg">
      {message}
    </div>,
    document.body
  );
}

export default Toast;