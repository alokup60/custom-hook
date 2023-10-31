import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverErr, setServerErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (err) {
        setServerErr(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { isLoading, apiData, serverErr };
};

export default useFetch;
