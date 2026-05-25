import { useState, useEffect } from "react";

export default function useCustomFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
    };

    fetchData();
  }, []);
  return data;
}
