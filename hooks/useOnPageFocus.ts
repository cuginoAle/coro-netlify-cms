import { useCallback, useEffect } from 'react';

const useOnPageFocus = (cb: () => void) => {
  const handleFocus = useCallback(cb, [cb]);

  useEffect(() => {
    window.addEventListener('focus', handleFocus, false);
    return () => {
      window.removeEventListener('focus', handleFocus, false);
    };
  }, [handleFocus]);
};

export { useOnPageFocus };
