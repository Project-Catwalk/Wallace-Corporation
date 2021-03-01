import React, { useState } from 'react';
import styles from '../styleComponents/App.module.css';
import axios from 'axios';

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
    if (props.review_id) {
      const { review_id } = props;
      axios.put(`/reviews/${review_id}/helpful`)
        .then((status) => console.log(status))
        .catch((err) => console.log(err));
    } else if (props.question_id) {
      const { question_id } = props;
      axios.put(`/qa/questions/${question_id}/helpful`)
        .then((status) => console.log(status))
        .catch((err) => console.log(err));
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
