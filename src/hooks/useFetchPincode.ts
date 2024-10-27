import { useState, useEffect } from 'react';

const useFetchPincode = (pincode: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then(response => response.json())
      .then(setData)
      .catch(setError);
  }, [pincode]);

  return { data, error };
};

export default useFetchPincode;
