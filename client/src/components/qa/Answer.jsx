import React, { useState } from 'react';

const Answer = (props) => {
  const { answer } = props;
  const { body, answerer_name, date } = answer;
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
      <p>by {answerer_name}, {getProperDate(date)} | Helpful? | Report </p>
    </>
  );
};

export default Answer;
