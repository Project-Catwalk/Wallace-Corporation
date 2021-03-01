import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import styles from '../styleComponents/QA.modules.css';

const Question = (props) => {
  const { question_body, answers } = props.question;
  const [answerList, setAnswerList] = useState([]);
  // answers = Array.from(answers);
  let answerArray = Object.values(answers);
  // console.log(answerArray);
  useEffect(() => {
    setAnswerList(answerArray);
  }, []);

  return (
    <div className={styles.question}>
      <div>Q: {question_body}</div>
      <div>
        A:
        {answerList.map((answer, idx) => <Answer key={idx} answer={answer} />)}
      </div>
    </div>
  );
};

export default Question;
