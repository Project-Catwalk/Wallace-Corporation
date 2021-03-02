import React, { useState } from 'react';
import Helpful from '../Helpful';

const Answer = (props) => {
  const { answer } = props;
  const { body, answerer_name, date, id, helpfulness } = answer;
  // date = date.slice(0, date.indexOf(T));

  const getProperDate = (weirdDate) => {
    let dateArr = weirdDate.slice(0, weirdDate.indexOf('T')).split('-');
    let year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  return (
    <>
      <p>{body}</p>
      <p>by {answerer_name}, {getProperDate(date)}</p>
      <Helpful answer_id={id} helpfulness={helpfulness} />
    </>
  );
};

export default Answer;
