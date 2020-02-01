import { useState, useEffect } from "react";
/**
 * Adiciona um delay na atualização de um valor
 * @param {any} value
 * @param {int} delay
 */
export default function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return throttledValue;
}
