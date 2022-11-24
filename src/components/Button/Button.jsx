import React from "react";
import PropTypes from 'prop-types';
import css from "./Button.module.css"

export function Button({ onClick }) {
  //const [hasError, setHasError] = useState(false);
  
  return (
      <button className={css.Button} onClick={onClick}>
        Load more...
      </button>
    );
}

Button.propTypes = {
  hasError: PropTypes.bool,
};