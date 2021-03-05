import React, { useEffect, useState } from 'react';
import qastyles from '../../styleComponents/QA.modules.css';

const QASearchBar = (props) => {
  const {searchQuestions} = props;

  const [searchField, setSearchField] = useState('');

  const handleChange = ({target}) => {
    const { value } = target
    setSearchField(value);
    console.log(searchField);
    if (value.length >= 3) {
      searchQuestions(value);
    }
  };
  return (
    <>
      <h2>Questions & Answers</h2>
      <input
        onChange = {(e) => searchQuestions(e.target.value)}
        className={qastyles.searchBar}
        placeholder="Search Questions..."
        // value={searchField}
      />
    </>
  );
};

export default QASearchBar;
