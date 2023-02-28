import { useCallback, useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const useFetch = (url, API_KEY) => {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { counter, increment } = useCounter(1);

  const getUrl = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${API_KEY}&page=${counter}`);
      const data = await res.json();
      const imageUrlList = await data.map((dog) => dog);
      setUrls(imageUrlList);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [API_KEY, counter, url]);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  return {
    isLoading,
    urls,
    increment,
  };
};
