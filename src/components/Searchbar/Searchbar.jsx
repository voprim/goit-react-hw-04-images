import React, { useState } from "react";
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";

export function Searchbar({ onSubmit, searchQuery }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={handleChange}
            className={css.SearchFormInput}
            value={query}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

Searchbar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
