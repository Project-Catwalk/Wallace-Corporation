import React from 'react';
import { Icon } from '@iconify/react';
import magnifyingGlass from '@iconify-icons/entypo/magnifying-glass';
import qastyles from '../../styleComponents/QA.modules.css';

const QASearchBar = (props) => {
  const {searchQuestions} = props;

  return (
    <>
      <div className={qastyles.searchBarSection}>
        <Icon className={qastyles.magnifyingGlass} icon={magnifyingGlass} />
        <input
          data-testid="search-input"
          type="search"
          onChange={(e) => searchQuestions(e.target.value)}
          className={qastyles.searchBar}
          placeholder="Search Questions..."
        />
      </div>
    </>
  );
};

export default QASearchBar;
