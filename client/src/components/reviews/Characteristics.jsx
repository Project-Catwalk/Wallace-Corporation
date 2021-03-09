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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
              <label style={{ gridRow: '2/3' }} htmlFor="one">{charObject[x[0]][1]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`1-${x[1].id}`}
                style={{ gridRow: '1/2' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', justifyContent: 'center' }}>
              <label style={{ gridRow: '2/3' }} htmlFor="two">{charObject[x[0]][2]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`2-${x[1].id}`}
                style={{ gridRow: '1/2' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', justifyContent: 'center' }}>
              <label style={{ gridRow: '2/3' }} htmlFor="three">{charObject[x[0]][3]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`3-${x[1].id}`}
                style={{ gridRow: '1/2' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', justifyContent: 'center' }}>
              <label style={{ gridRow: '2/3' }} htmlFor="four">{charObject[x[0]][4]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`4-${x[1].id}`}
                style={{ gridRow: '1/2' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', justifyContent: 'center' }}>
              <label style={{ gridRow: '2/3' }} htmlFor="five">{charObject[x[0]][5]}</label>
              <input
                type="radio"
                name={x[0]}
                value={`5-${x[1].id}`}
                style={{ gridRow: '1/2' }}
              />
            </div>
          </div>
        </div>
      ))
      : null
  );
};

export default Characteristics;
