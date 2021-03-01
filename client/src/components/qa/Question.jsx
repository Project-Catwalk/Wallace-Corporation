import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import styles from '../../styleComponents/QA.modules.css';
import Helpful from '../Helpful';

const Question = (props) => {
  const { question_body, answers } = props.question;
  const [answerList, setAnswerList] = useState([]);
  const answerArray = Object.values(answers);
  useEffect(() => {
    setAnswerList(answerArray);
  }, []);

  return (
    <div className={styles.question}>
      <div>Q: {question_body}</div>
      <button type="button">  Add Answer </button>
      <div>
        A:
        {answerList.map((answer, idx) => <Answer key={idx} answer={answer} />)}
      </div>
    </div>
  );
};

export default Question;
