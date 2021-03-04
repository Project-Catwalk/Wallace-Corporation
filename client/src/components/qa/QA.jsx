import React, { useEffect, useState } from 'react';
import styles from '../../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'
import Question from './Question';
import Modal from './QuestionModal';
import axios from 'axios';

const QA = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productId } = props;

  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [moreQuestionsButton, setMoreQuestionsButton] = useState('More Answered Questions')

  // console.log(displayedQuestions);
  // console.log('------');
  // console.log(productId);

  const getQuestions = (id) => {
    axios.get(`/qa/questions/${id}/${expanded}`)
      .then((results) => {
        let sorted = sortQuestions(results.data);
        setDisplayedQuestions(sorted);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getQuestions(20101);
  }, [expanded]);

  const sortQuestions = (questionArr) => {
    // console.log(questionArr);
    let length = questionArr.length;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < length - 1; i++) {
        if (questionArr[i].question_helpfulness < questionArr[i + 1].question_helpfulness) {
          const tmp = questionArr[i];
          questionArr[i] = questionArr[i + 1];
          questionArr[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);
    return questionArr;
  };

  const increaseNumOfQuestions = () => {
    // if (questions.length - numOfQuestions >= 2) {
    //   setNumOfQuestions(numOfQuestions + 2);
    // } else if (questions.length - numOfQuestions === 1) {
    //   setNumOfQuestions(numOfQuestions + 1);
    // }
    // setPageNumber(pageNumber + 1);
    setExpanded(!expanded);
    expanded ? setMoreQuestionsButton('Show More Questions') : setMoreQuestionsButton('Show Less Questions')
  };

  return (
    <>
    <div className={styles.QA}>
      <div className={styles.search}>
        <QASearchBar />
      </div>
      <div style={{ maxHeight: '1000px', overflowY: 'scroll' }} className={styles.qa}>
        {displayedQuestions.map((question, idx) => <Question key={idx} productId={productId} getQuestions={getQuestions} question={question} />)}
      </div>
      <div className={styles.buttons}>
        <button onClick={increaseNumOfQuestions} >{moreQuestionsButton}</button>
        <button onClick={() => setIsOpen(true)}>Add A Question + </button>
        <Modal productId={productId} getQuestions={getQuestions} onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      </div>
    </div>
    </>
  );
};

export default QA;
