import React, { useEffect, useState } from 'react';
import qastyles from '../../styleComponents/QA.modules.css';
import { Icon, InlineIcon } from '@iconify/react';
import magnifyingGlass from '@iconify-icons/entypo/magnifying-glass';

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
      <div className={qastyles.searchBarSection}>
        <Icon className={qastyles.magnifyingGlass} icon={magnifyingGlass} />
        <input
          type="search"
          onChange={(e) => searchQuestions(e.target.value)}
          className={qastyles.searchBar}
          placeholder="Search Questions..."
        // value={searchField}
        />
      </div>
    </>
  );
};

export default QASearchBar;
