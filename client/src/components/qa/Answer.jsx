import React from 'react';
import Helpful from '../Helpful';
import qastyles from '../../styleComponents/QA.modules.css';
import ExpandedPhotos from '../ExpandedPhotos';

const Answer = (props) => {
  const { answer } = props;
  const { body, answerer_name, date, id, helpfulness, photos } = answer;

  const getProperDate = (weirdDate) => {
    let dateArr = weirdDate.slice(0, weirdDate.indexOf('T')).split('-');
    let year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  return (
    <div className={qastyles.answer}>
      <span className={qastyles.answerBody}>{body}</span>
      <div className={qastyles.answerPhotos}>
        {photos.map((photo, idx) => <ExpandedPhotos key={idx} photo={photo} />)}
      </div>
      <div>
        <p style={{ display: 'inline' }} className={qastyles.userAndDate}>
          by
        </p>
        <p style={{ display: 'inline' }} className={answerer_name === 'Seller' ? qastyles.seller : qastyles.userAndDate}>
          {' '}
          {answerer_name}
        </p>
        <p style={{ display: 'inline' }} className={qastyles.userAndDate}>
          ,
          {' '}
          {getProperDate(date)}
        </p>
        <br />
      </div>
      <div className={qastyles.answerHelpfulWrapper}>
        <Helpful className={qastyles.answerHelpful} answer_id={id} helpfulness={helpfulness} />
      </div>
    </div>
  );
};

export default Answer;
