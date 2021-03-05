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
  const [expanded, setExpanded] = useState(false);
  const [searching, setSearching] = useState(false);
  const [moreQuestionsButton, setMoreQuestionsButton] = useState('More Answered Questions');

  // console.log(displayedQuestions);
  // console.log('------');
  // console.log(productId);
  const sortQuestions = (questionArr) => {
    // console.log(questionArr);
    const length = questionArr.length;
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

  const getQuestions = (id) => {
    axios.get(`/qa/questions/${id}`)
      .then((results) => {
        const sorted = sortQuestions(results.data);
        setQuestions(sorted);
        setDisplayedQuestions(sorted.slice(0, 2));
      })
      .catch(console.log);
  };

  useEffect(() => {
    getQuestions(20111);
  }, []);

  useEffect(() => {
    if (expanded) {
      setDisplayedQuestions(questions);
      setMoreQuestionsButton('Show Less Questions');
    } else {
      setDisplayedQuestions(questions.slice(0, 2));
      setMoreQuestionsButton('More Answered Question');
    }
  }, [expanded])

  const increaseNumOfQuestions = () => {
    setExpanded(!expanded);
  };

  const searchQuestions = (value) => {
    if (value.length >= 3) {
      setSearching(true);
      const found = questions.filter(question => question.question_body.toLowerCase().includes(value.toLowerCase()));
      setDisplayedQuestions(found);
    } else if (expanded) {
      setSearching(false);
      setDisplayedQuestions(questions);
    } else {
      setSearching(false);
      setDisplayedQuestions(questions.slice(0, 2));
    }
  };

  return (
    <>
    <div className={styles.QA}>
      
      <div className={styles.search}>
        <QASearchBar searchQuestions={searchQuestions} />
      </div>
      <div style={{ maxHeight: '1000px', overflowY: 'scroll' }} className={styles.qa}>
        {displayedQuestions.map((question, idx) => <Question key={idx} productId={productId} getQuestions={getQuestions} question={question} />)}
      </div>
      <div className={styles.buttons}>
        {searching ? null : <button onClick={increaseNumOfQuestions} >{moreQuestionsButton}</button>}
        <button onClick={() => setIsOpen(true)}>Add A Question + </button>
        <Modal productId={productId} getQuestions={getQuestions} onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      </div>
    </div>
    </>
  );
};

export default QA;
