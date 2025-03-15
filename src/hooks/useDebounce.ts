import { useState, useEffect } from "react";

function useDebounce(searchTerm: string, delay: number) {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => clearTimeout(handler);
  }, [searchTerm, delay]);

  return debouncedSearchTerm;
}

export default useDebounce;
