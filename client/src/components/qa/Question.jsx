import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import styles from '../../styleComponents/QA.modules.css';
import Helpful from '../Helpful';
import Modal from './AnswerModal';

const Question = (props) => {
  const { question, getQuestions, productId } = props;
  // console.log(props);
  const { question_body, answers, question_id, question_helpfulness } = question;
  const [answerList, setAnswerList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const answerArray = Object.values(answers);

  useEffect(() => {
    setAnswerList(answerArray);
  }, [question]);

  return (
    <div className={styles.question}>
      <div>Q: {question_body}</div>
      <Helpful question_id={question_id} helpfulness={question_helpfulness} />
      <button onClick={() => setIsOpen(true)} type="button">Add Answer</button>
      <Modal productId={productId} getQuestions={getQuestions} question_id={question_id} onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      <div>
        A:
        {answerList.map((answer, idx) => <Answer key={idx} answer={answer} />)}
      </div>
    </div>
  );
};

export default Question;
