import React, { useState } from 'react';
import styles from '../styleComponents/App.module.css';
import axios from 'axios';

const Helpful = (props) => {
  const { helpfulness } = props;
  const [count, setCount] = useState(helpfulness);
  const [reported, setReported] = useState('Report');

  const handleCount = (e) => {
    setCount(helpfulness + 1);

    if (props.review_id) {
      const { review_id } = props;
      axios.put(`/reviews/${review_id}/helpful`)
        .then((status) => console.log(status.status))
        .catch((err) => console.log(err));
    } else if (props.question_id) {
      const { question_id } = props;
      axios.put(`/qa/questions/${question_id}/helpful`)
        .then((status) => console.log(status.status))
        .catch((err) => console.log(err));
    }
  };

  const report = () => {
    setReported('Reported');
    console.log(props);
    if (props.answer_id) {
      console.log(props.answer_id)
      axios.put(`/qa/answers/${props.answer_id}/report`)
        .then(() => console.log(status.status))
        .catch(console.log);
    } else if (props.review_id) {
      axios.put(`/reviews/${props.review_id}/report`)
        .then(() => console.log(status.status))
        .catch(console.log);
    } else {
      axios.put(`/qa/questions/${props.question_id}/report`)
        .then(() => console.log(status.status))
        .catch(console.log);
    }
  };

  return (
    <div className={styles.helpful}>
      <div className={styles.helpful}>Was this helpful?</div>
      <button type="submit" onClick={handleCount} value="yes">Yes</button>
      <div className={styles.helpful}>
        (
        {count}
        )
      </div>
      <button onClick={report} type="submit">{reported}</button>
    </div>
  );
};

export default Helpful;
