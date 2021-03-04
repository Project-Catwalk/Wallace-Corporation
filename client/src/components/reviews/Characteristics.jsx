import React, { useState } from 'react';

const Characteristics = ({ metaReviews }) => {
  const [characteristics, setCharacteristics] = useState({});

  const handleCharacteristics = (e) => {
    const { value } = e.target;
    const arr = value.split('-');
    const rating = arr[0];
    const id = arr[1];
    const newCharacteristics = characteristics;
    newCharacteristics[id] = rating;
    setCharacteristics({ ...newCharacteristics });
  };

  return (
    metaReviews.map((characteristic) => (
      <div key={characteristic[1].id} onChange={handleCharacteristics}>
        <p>{characteristic[0]}</p>
        <input
          type="radio"
          value={`1-${characteristic[1].id}`}
        />
        <input
          name={characteristic[0]}
          type="radio"
          value={`2-${characteristic[1].id}`}
        />
        <input
          name={characteristic[0]}
          type="radio"
          value={`3-${characteristic[1].id}`}
        />
        <input
          name={characteristic[0]}
          type="radio"
          value={`4-${characteristic[1].id}`}
        />
        <input
          name={characteristic[0]}
          type="radio"
          value={`5-${characteristic[1].id}`}
        />
      </div>
    ))
  );
};

export default Characteristics;
