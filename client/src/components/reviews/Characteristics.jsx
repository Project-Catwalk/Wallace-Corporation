import React, { useState } from 'react';

const Characteristics = ({ characteristics, charObject, setReview, review }) => {
  const [chars, setChars] = useState({});

  const handleCharacteristics = (e) => {
    const { value } = e.target;
    const arr = value.split('-');
    const rating = arr[0];
    const id = arr[1];
    const newCharacteristics = chars;
    newCharacteristics[id] = Number(rating);
    setReview({ ...review, characteristics: newCharacteristics });
  };

  return (
    (characteristics)
      ? Object.entries(characteristics).map((x) => (
        <div key={x[1].id} onChange={handleCharacteristics}>
          <p style={{ fontWeight: 'bolder' }}>{x[0]} *</p>
          <label htmlFor="one">{charObject[x[0]][1]}</label>
          <input
            type="radio"
            name="one"
            value={`1-${x[1].id}`}
          />
          <label htmlFor="two">{charObject[x[0]][2]}</label>
          <input
            type="radio"
            name="two"
            value={`2-${x[1].id}`}
          />
          <label htmlFor="three">{charObject[x[0]][3]}</label>
          <input
            type="radio"
            name="three"
            value={`3-${x[1].id}`}
          />
          <label htmlFor="four">{charObject[x[0]][4]}</label>
          <input
            type="radio"
            name="four"
            value={`4-${x[1].id}`}
          />
          <label htmlFor="five">{charObject[x[0]][5]}</label>
          <input
            type="radio"
            name="five"
            value={`5-${x[1].id}`}
          />
        </div>
      ))
      : null
  );
};

export default Characteristics;
