import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css"


export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };

  const reset = () => {
    setQuery('');
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    reset();
  };
    
  const onButtonClick = e => {
    if (query)
      e.currentTarget.disabled = false;
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handlerSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handlerChange}
          value={query}
        />
        <button type="submit" className={css.SearchFormButton} onClick={() => onButtonClick}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};
    

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};