import React from 'react';

const useFetch = ({url, id}) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const dataArray = await response.json();
      setData(dataArray[id]);
    };

    fetchData();
  }, [url, id]);

  return data;
};

export default useFetch;