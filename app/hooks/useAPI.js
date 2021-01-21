import React, { useState } from "react";

const useAPI = (apiFunction) => {
  const [data, setData] = useState();
  const [hasError, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const request = async (...args) => {
    const res = await apiFunction(...args);
    setIsLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setData(res.data);
  };

  return { request, data, hasError, isLoading };
};

export default useAPI;
