import React, { useState } from 'react';
import useFetchPincode from '../hooks/useFetchPincode';


const PincodeDisplay: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const { data, error } = useFetchPincode(pincode);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter pincode"
        onChange={(e) => setPincode(e.target.value)}
      />
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default PincodeDisplay;
