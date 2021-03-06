import React, { useState } from 'react';
import Helpful from '../Helpful';
import Photo from './Photo';
import qastyles from '../../styleComponents/QA.modules.css';

const Answer = (props) => {
  const { answer } = props;
  const { body, answerer_name, date, id, helpfulness, photos } = answer;
  // console.log(photos);
  // console.log('--------');

  const getProperDate = (weirdDate) => {
    let dateArr = weirdDate.slice(0, weirdDate.indexOf('T')).split('-');
    let year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  return (
    <div className={qastyles.answer}>
      <span className={qastyles.answerBody} >{body}</span>
      <div className={qastyles.answerPhotos}>
        {photos.map((photo, idx) => <Photo key={idx} photo={photo} />)}
      </div>
      <div>
        <p className={qastyles.userAndDate}>by {answerer_name}, {getProperDate(date)}</p>
        <Helpful className={qastyles.answerHelpful} answer_id={id} helpfulness={helpfulness} />
      </div>
    </div>
  );
};

export default Answer;
