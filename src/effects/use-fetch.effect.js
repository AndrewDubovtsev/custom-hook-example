import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      console.log(res);
      const dataArray = await res.json();
      setData(dataArray[0]);
    };
    console.log('hello!');
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
