import React, { useState } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import s from './style.module.css';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const submit = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      onSearchSubmit(e.target.value);
      setSearchValue('');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <SearchIcon className={s.search_icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        value={searchValue}
        placeholder='Search your favourite TV Shows...'
      />
    </div>
  );
};

export default SearchBar;
