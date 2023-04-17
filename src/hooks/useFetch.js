import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [state, setState] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
        setHasError(false);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
        setIsLoading(false)
      });
  }, [url]);

  return [state, hasError, isLoading];
};

export default useFetch;
