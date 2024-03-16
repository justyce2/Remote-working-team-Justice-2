import { useEffect, useState } from "react";

const DelayedFallback = ({ delay = 300, fallback }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? fallback : null;
};

export default DelayedFallback;
