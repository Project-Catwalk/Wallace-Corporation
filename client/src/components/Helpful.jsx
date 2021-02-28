import React, { useState } from 'react';
import styles from '../styleComponents/App.module.css';

const Helpful = () => {
  const [count, setCount] = useState({ yes: 0, no: 0 });

  const handleCount = (e) => {
    const { value } = e.target;
    if (value === 'yes') {
      const tempCount = count.yes + 1;
      setCount({ yes: tempCount, no: count.no });
    } else {
      const tempCount = count.no + 1;
      setCount({ yes: count.yes, no: tempCount });
    }
  };

  return (
    <div className={styles.helpful}>
      <div className={styles.helpful}>Was this helpful?</div>
      <button type="submit" onClick={handleCount} value="yes">Yes</button>
      <div className={styles.helpful}>
        (
        {count.yes}
        )
      </div>
      <button type="submit" onClick={handleCount} value="no">No</button>
      <div className={styles.helpful}>
        (
        {count.no}
        )
      </div>
      <button type="submit">Report</button>
    </div>
  );
};

export default Helpful;
