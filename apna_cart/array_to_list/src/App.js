import React, { useState, useEffect } from 'react';

function App() {
  const [myArray] = useState([4,2,5,6,]);
const [showArray, setShowArray] = useState(false);

  useEffect(() => {
    if (showArray) {
      console.log("Array values are:", myArray);
    }
  }, [showArray, myArray]);

  const handleButtonClick = () => {
    setShowArray(true);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Print Array Values</button>
      {showArray && (
        <ul>
          {myArray.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
