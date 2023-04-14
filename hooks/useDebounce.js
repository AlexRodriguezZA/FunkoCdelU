import { useState, useEffect } from "react";

export default function useDebounce(valor, delay) {
  const [debounceValue, setdebounceValue] = useState(valor);

  useEffect(() => {
    const tiempoDelay = setTimeout(() => {
      setdebounceValue(value);
    }, delay);

    return () => clearTimeout(tiempoDelay);
  }, [valor, delay]);

  return debounceValue;
}
