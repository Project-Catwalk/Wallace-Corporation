import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import qastyles from '../../styleComponents/QA.modules.css';
import Helpful from '../Helpful';
import Modal from './AnswerModal';

const Question = (props) => {
  const { question, getQuestions, productId } = props;
  // console.log(props);
  const { question_body, answers, question_id, question_helpfulness } = question;
  const [answerList, setAnswerList] = useState([]);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [seeMoreAnswersText, setSeeMoreAnswersText] = useState('See More Answers')

  const sortAnswersBySeller = (answerArr) => {
    let sellerMessages = answerArr.filter(answer => answer.answerer_name === 'Seller');
    let otherMessages = answerArr.filter(answer => answer.answerer_name !== 'Seller');
    return sellerMessages.concat(otherMessages);
  };

  const sortAnswersByHelpfulness = (answerArr) => {
    const length = answerArr.length;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < length - 1; i++) {
        if (answerArr[i].helpfulness < answerArr[i + 1].helpfulness) {
          const tmp = answerArr[i];
          answerArr[i] = answerArr[i + 1];
          answerArr[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);
    return sortAnswersBySeller(answerArr);
  };
  
  useEffect(() => {
    const sortedAnswers = sortAnswersByHelpfulness(Object.values(answers));
    setAnswerList(sortedAnswers);
  }, [question]);

  useEffect(() => {
    setDisplayedAnswers(answerList.slice(0, 2));
  }, [answerList]);

  useEffect(() => {
    if (expanded) {
      setDisplayedAnswers(answerList);
      setSeeMoreAnswersText('Collapse Answers');
    } else {
      setDisplayedAnswers(answerList.slice(0, 2));
      setSeeMoreAnswersText('See More Answers');
    }
  }, [expanded]);

  const showMoreAnswers = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={qastyles.questionAndAnswer}>
      <div className={qastyles.questionGrid}>
        <h4 className={qastyles.q}>Q:</h4>
        <div className={qastyles.question}>
          <p className={qastyles.questionBody} >{question_body}</p>
        </div>
        <div className={qastyles.questionHelpful}>
          <Helpful question_id={question_id} helpfulness={question_helpfulness} />
          <button className={qastyles.addAnswerButton} onClick={() => setIsOpen(true)} type="button">Add Answer</button>
        </div>
        <Modal productId={productId} getQuestions={getQuestions} question_id={question_id} onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      </div>

      <div className={qastyles.answerGrid}>
        <h4 className={qastyles.a}>A:</h4>
        <div className={qastyles.answerList}>
          {displayedAnswers.map((answer, idx) => <Answer key={idx} answer={answer} />)}
        </div>
        {answerList.length > 2 ? <button className={qastyles.showMoreAnswersButton} onClick={showMoreAnswers}>{seeMoreAnswersText}</button> : null}
      </div>
    </div>
  );
};

export default Question;
