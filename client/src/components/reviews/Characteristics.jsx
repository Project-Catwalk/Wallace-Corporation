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
          <p>{x[0]} *</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 30%)', fontSize: '10px' }}>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridColumn: '1/2' }}>
              <label style={{ gridRow: '2/3', justifySelf: 'center' }} htmlFor="one">{charObject[x[0]][1]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`1-${x[1].id}`}
                style={{ gridRow: '1/2', justifySelf: 'center' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridColumn: '2/3' }}>
              <label style={{ gridRow: '2/3', justifySelf: 'center' }} htmlFor="two">{charObject[x[0]][2]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`2-${x[1].id}`}
                style={{ gridRow: '1/2', justifySelf: 'center' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridColumn: '3/4' }}>
              <label style={{ gridRow: '2/3', justifySelf: 'center' }} htmlFor="three">{charObject[x[0]][3]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`3-${x[1].id}`}
                style={{ gridRow: '1/2', justifySelf: 'center' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridColumn: '4/5' }}>
              <label style={{ gridRow: '2/3', justifySelf: 'center' }} htmlFor="four">{charObject[x[0]][4]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`4-${x[1].id}`}
                style={{ gridRow: '1/2', justifySelf: 'center' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridColumn: '5/6' }}>
              <label style={{ gridRow: '2/3', justifySelf: 'center' }} htmlFor="five">{charObject[x[0]][5]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`5-${x[1].id}`}
                style={{ gridRow: '1/2', justifySelf: 'center' }}
              />
            </div>
          </div>
        </div>
      ))
      : null
  );
};

export default Characteristics;
