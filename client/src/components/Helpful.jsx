import React, { useState } from 'react';
import styles from '../styleComponents/App.module.css';

const Helpful = (props) => {
  const { helpfulness } = props;
  const [count, setCount] = useState({ yes: helpfulness });

  const handleCount = (e) => {
    const { value } = e.target;
    if (value === 'yes') {
      const tempCount = count.yes + 1;
      setCount({ yes: tempCount });
    } else if (count.yes > 0 && value === 'no') {
      const tempCount = count.yes - 1;
      setCount({ yes: tempCount });
    }
  };

  return (
    <div className={styles.helpful}>
      <div className={styles.helpful}>Was this helpful?</div>
      <button type="submit" onClick={handleCount} value="yes">Yes</button>
      <button type="submit" onClick={handleCount} value="no">No</button>
      <div className={styles.helpful}>
        (
        {count.yes}
        )
      </div>
      <button type="submit">Report</button>
    </div>
  );
};

export default Helpful;
