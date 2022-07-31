import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();

        setData(json);
        setError(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError("Could not set the data");
          console.log(e);
        }
      }
      setIsPending(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isPending, error };
};
